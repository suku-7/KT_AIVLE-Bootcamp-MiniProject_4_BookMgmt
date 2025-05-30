// frontend/src/pages/BookDetail.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "../api/bookApi";
import { Box, Button, Typography, TextField, CircularProgress, Alert } from '@mui/material'; // Material-UI 컴포넌트 임포트

function BookDetail() {
    const { id } = useParams(); // URL 파라미터에서 id 가져오기
    const navigate = useNavigate();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const [error, setError] = useState(null);   // 에러 상태 추가
    const [feedbackMessage, setFeedbackMessage] = useState(null); // 사용자 피드백 메시지 (삭제 성공/실패 등)
    const [feedbackSeverity, setFeedbackSeverity] = useState('info'); // 'success' | 'error' | 'warning' | 'info'

    // 🟡 실제 데이터 불러오기
    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true); // 데이터 불러오기 시작 시 로딩 상태 true
                setError(null);   // 이전 에러 메시지 초기화
                setFeedbackMessage(null); // 새로운 요청 시작 시 피드백 메시지 초기화

                const response = await getBook(id); // bookApi.js의 getBook 함수 사용
                // 백엔드 응답 구조에 따라 data 필드에 접근 (CommonResponse 사용 가정)
                if (response.data && response.data.data) {
                    setBook(response.data.data); // 실제 책 데이터로 상태 업데이트
                } else {
                    setError("책 정보를 불러올 수 없습니다. 데이터 형식이 올바르지 않습니다.");
                }
            } catch (err) {
                console.error("도서 정보 조회 중 오류 발생:", err);
                // 에러 객체에 response가 있다면 더 구체적인 메시지 제공
                if (err.response && err.response.status === 404) {
                    setError("해당 도서를 찾을 수 없습니다.");
                } else {
                    setError("도서 정보를 불러오는 데 실패했습니다. 서버 상태를 확인해주세요.");
                }
            } finally {
                setLoading(false); // 데이터 불러오기 완료 시 로딩 상태 false
            }
        };

        if (id) { // id가 있을 때만 fetchBook 실행
            fetchBook();
        }
    }, [id]); // id가 변경될 때마다 useEffect 재실행

    // 도서 삭제 핸들러
    const handleDelete = async () => {
        const confirmDelete = window.confirm('정말로 이 도서를 삭제하시겠습니까?');
        if (!confirmDelete) {
            return;
        }

        try {
            setLoading(true); // 삭제 요청 시작 시 로딩
            setFeedbackMessage(null); // 이전 메시지 초기화

            const response = await deleteBook(id); // bookApi.js의 deleteBook 함수 사용

            // 백엔드에서 200 OK 또는 204 No Content 반환 시 성공으로 간주
            if (response.status === 200 || response.status === 204) {
                setFeedbackMessage('도서가 성공적으로 삭제되었습니다.');
                setFeedbackSeverity('success');
                // 삭제 후 목록 페이지로 이동
                setTimeout(() => { // 잠시 메시지를 보여준 후 이동
                    navigate('/books');
                }, 1500); // 1.5초 후 이동
            } else {
                // 백엔드에서 200/204 외의 상태 코드를 반환했을 때 (예: 500 에러인데 성공으로 잡히는 경우)
                setFeedbackMessage('도서 삭제에 실패했습니다.');
                setFeedbackSeverity('error');
                console.error('도서 삭제 실패:', response);
            }
        } catch (error) {
            console.error('도서 삭제 요청 중 오류 발생:', error);
            // 에러 객체에 response가 있다면 더 구체적인 메시지 제공
            if (error.response && error.response.data && error.response.data.message) {
                setFeedbackMessage(`삭제 실패: ${error.response.data.message}`);
            } else {
                setFeedbackMessage('서버 오류로 인해 삭제에 실패했습니다.');
            }
            setFeedbackSeverity('error');
        } finally {
            setLoading(false); // 삭제 요청 완료 시 로딩 해제
        }
    };

    const handleEdit = () => {
        navigate(`/books/edit/${id}`); // BookEdit.jsx 경로
    };

    // 렌더링 로직
    if (loading && !book) { // 초기 로딩 중일 때 (book이 아직 null일 때)
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
                <Typography sx={{ ml: 2 }}>도서 정보를 불러오는 중...</Typography>
            </Box>
        );
    }

    if (error) { // 에러가 발생했을 때
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
                <Alert severity="error">{error}</Alert>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/books')}>목록으로 돌아가기</Button>
            </Box>
        );
    }

    if (!book) { // 로딩/에러가 아니고 책 데이터도 없으면 (예: 404 이후)
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
                <Alert severity="warning">해당 도서를 찾을 수 없습니다.</Alert>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/books')}>목록으로 돌아가기</Button>
            </Box>
        );
    }

    // 책 데이터가 성공적으로 로드된 경우
    return (
        <Box sx={{ padding: "20px", fontFamily: "sans-serif", maxWidth: '900px', margin: 'auto' }}>
            {/* 피드백 메시지 표시 */}
            {feedbackMessage && (
                <Alert severity={feedbackSeverity} sx={{ position: 'sticky', top: 20, zIndex: 1000, mb: 2 }}>
                    {feedbackMessage}
                </Alert>
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', marginBottom: "20px" }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
                    도서 상세 정보
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        disabled={loading} // 삭제 중에는 버튼 비활성화
                    >
                        도서 삭제
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#81c784" }} // 초록색 버튼
                        onClick={handleEdit}
                    >
                        수정
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#d1ecf1", color: 'black' }} // 연한 파란색 버튼
                        onClick={() => navigate("/books")} // 홈 대신 /books (목록)으로 이동하도록 변경
                    >
                        목록으로
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
                {/* 이미지 영역 */}
                <Box sx={{ flexShrink: 0 }}> {/* 이미지 영역이 줄어들지 않도록 설정 */}
                    <img
                        src={book.cover_url || "https://via.placeholder.com/200x300?text=No+Cover"} // 🟡 여기도 ?text= 확인
                        alt={book.title}
                        style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                    />
                </Box>

                {/* 도서 정보 */}
                <Box sx={{ flexGrow: 1 }}> {/* 남은 공간을 차지하도록 설정 */}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 1 }}>작품 제목</Typography>
                    <TextField
                        fullWidth
                        value={book.title || ''}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, backgroundColor: "#f9f9f9" }}
                    />

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>작품 작가</Typography>
                    <TextField
                        fullWidth
                        value={book.author || ''}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, backgroundColor: "#f9f9f9" }}
                    />

                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>시간</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={2}
                        value={
                            `도서 생성 날짜 : ${book.created_at ? new Intl.DateTimeFormat('ko-KR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true // 오전/오후 표시를 위해
                            }).format(new Date(book.created_at)) : "N/A"}\n` +
                            `도서 수정 날짜 : ${book.updated_at ? new Intl.DateTimeFormat('ko-KR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                            }).format(new Date(book.updated_at)) : "N/A"}`
                        }
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, backgroundColor: "#f9f9f9" }}
                    />
                    {/* cover_prompt 필드 추가 */}
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>표지 프롬프트</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={book.cover_prompt || 'N/A'} // cover_prompt -> coverPrompt
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, backgroundColor: "#f9f9f9" }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default BookDetail;