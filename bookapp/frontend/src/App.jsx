import axios from 'axios';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        axios.get('http://localhost:8080/api/hello')
            .then(res => {
                alert('연결됨: ' + res.data);
            })
            .catch(err => {
                alert('연결 실패');
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>React ↔ Spring Boot 연결 테스트</h1>
        </div>
    );
}

export default App;
