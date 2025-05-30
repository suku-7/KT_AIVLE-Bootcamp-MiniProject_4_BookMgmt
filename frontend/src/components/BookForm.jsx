// src/components/BookForm.jsx
import { useState } from "react";


function BookForm({ initialValues = {}, onSubmit }) {
    const [title, setTitle] = useState(initialValues.title || "");
    const [author, setAuthor] = useState(initialValues.author || "");
    const [coverPrompt, setCoverPrompt] = useState(initialValues.cover_prompt || "");

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      title,
      author,
      cover_prompt: coverPrompt,
      // cover_url은 생성 버튼에서 연결 예정
    };
    onSubmit(newBook);
  };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
            {/* 제목 */}
            <div style={{ marginBottom: "30px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    1. 작품 제목을 입력해주세요<span style={{ color: "red" }}> *</span> (필수)
                </label>
                <input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="예: 클라라와 태양"
                    maxLength={20}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc"
                    }}
                />
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>{title.length}/20</div>
            </div>

            {/* 작가 */}
            <div style={{ marginBottom: "30px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    2. 작가 이름을 입력해주세요
                </label>
                <input
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="예: 이시구로"
                    maxLength={30}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc"
                    }}
                />
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>{author.length}/30</div>
            </div>

            {/* 프롬프트 */}
            <div style={{ marginBottom: "30px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    3. 작품에 대한 소개를 입력해주세요 (선택)
                </label>
                <textarea
                    name="cover_prompt"
                    value={coverPrompt}
                    onChange={(e) => setCoverPrompt(e.target.value)}
                    placeholder="예: 태양 에너지를 원동력으로 사는 AI 친구 ‘클라라’가 사람을 이해해가는 여정을 담았습니다..."
                    maxLength={200}
                    rows={6}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "14px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        resize: "vertical"
                    }}
                />
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>{coverPrompt.length}/200</div>
            </div>

            {/* 저장 버튼 */}
            <button type="submit" style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "6px"
            }}>
                저장
            </button>
        </form>
    );
}

export default BookForm;