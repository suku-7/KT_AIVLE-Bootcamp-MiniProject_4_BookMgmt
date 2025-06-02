// src/components/CoverGeneratorButton.jsx

import { useState } from "react";
import axios from "axios";

function CoverGeneratorButton({ promptName, urlName }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    const prompt = document.querySelector(`[name='${promptName}']`).value;
    if (!prompt.trim()) {
      alert("프롬프트를 입력하세요.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          model: "dall-e-3",
          prompt,
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
      document.querySelector(`[name='${urlName}']`).value = url;
    } catch (error) {
      console.error("OpenAI 요청 실패:", error.response || error);
      alert("이미지 생성 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" onClick={handleGenerate} disabled={loading}>
      {loading ? "생성 중..." : "표지 이미지 생성"}
    </button>
  );
}

export default CoverGeneratorButton;