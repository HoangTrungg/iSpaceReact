import { Link } from 'react-router-dom';
function errorpage() {
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1 className="text-primary text-uppercase mb-3" style={{ letterspacing: '10x'}}>404 page</h1>
                        <p>Trang bạn đang tìm không có </p>
                        <Link to='/'>Quay lại trang chủ</Link>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default errorpage;