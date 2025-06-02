// src/components/BookForm.jsx

import { useState } from "react";
import axios from "axios";

function BookForm({ initialValues = {}, onSubmit }) {
    const [title, setTitle] = useState(initialValues.title || "");
    const [author, setAuthor] = useState(initialValues.author || "");
    const [coverPrompt, setCoverPrompt] = useState(initialValues.cover_prompt || "");
    const [coverUrl, setCoverUrl] = useState(initialValues.cover_url || "");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            cover_prompt: coverPrompt,
            cover_url: coverUrl, // 이미지 링크도 함께 전송
        };
        onSubmit(newBook);
    };

    const handleGenerateCover = async () => {
        if (!coverPrompt.trim()) {
            alert("프롬프트를 입력해주세요.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",
                {
                    model: "dall-e-3",
                    prompt: coverPrompt,
                    n: 1,
                    size: "1024x1792",
                },
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const url = response.data.data[0].url;
            setCoverUrl(url);
        } catch (error) {
            console.error("OpenAI 요청 실패:", error.response || error);
            alert("이미지 생성 실패");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
            {/* 제목 */}
            <div style={{ marginBottom: "30px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    1. 작품 제목을 입력해주세요<span style={{ color: "red" }}> *</span>
                </label>
                <input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="예: 클라라와 태양"
                    maxLength={20}
                    style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
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
                    style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>{author.length}/30</div>
            </div>

            {/* 프롬프트 */}
            <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
                    3. 표지에 대한 프롬프트를 입력해주세요
                </label>
                <textarea
                    name="cover_prompt"
                    value={coverPrompt}
                    onChange={(e) => setCoverPrompt(e.target.value)}
                    placeholder=""
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

            {/* 표지 이미지 생성 */}
            <div style={{ marginBottom: "20px" }}>
                <button
                    type="button"
                    onClick={handleGenerateCover}
                    disabled={loading}
                    style={{
                        padding: "10px 16px",
                        backgroundColor: "#5a9",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    {loading ? "생성 중..." : "표지 이미지 생성"}
                </button>
                {coverUrl && (
                    <div style={{ marginTop: "10px" }}>
                        <img src={coverUrl} alt="생성된 표지" style={{ width: "150px", borderRadius: "4px" }} />
                    </div>
                )}
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
