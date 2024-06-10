import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <Link to="/"><img class="img-fluid" style={{ width: 'auto' }} src="./img/logomain.png" alt='' /></Link>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Địa Chỉ</h6>
                <small>240 Võ Văn Ngân, phường Bình Thọ, TP Thủ Đức, TPHCM</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email</h6>
                <small>quangcao@ispace.edu.vn</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Phone</h6>
                <small>+0938 205 966</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-2 d-none d-lg-block">
            
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav py-0">
                  <Link to="/" className="nav-item nav-link">Trang Chủ</Link>
                  <a className="nav-item nav-link">Tổng Quan</a>
                  <a className="nav-item nav-link">Tuyển Sinh</a>
                  <a className="nav-item nav-link">Giảng Viên</a>
                  <a className="nav-item nav-link">Tin Tức</a>
                  <div class="nav-item dropdown">
                    <Link to='/NGANHHOC' class="nav-link dropdown-toggle" data-toggle="dropdown">Chương Trình Đào Tạo</Link>
                    <div class="dropdown-menu rounded-0 m-0">
                      <Link to="/ANM" className="dropdown-item">An Ninh Mạng</Link>
                      <Link to="/LTW" className="dropdown-item">Phát Triển Phần Mềm</Link>
                      <Link to="/TKDH" className="dropdown-item">Thiết Kế Đồ Họa</Link>
                      <Link to="/NGANHHOC" className="dropdown-item">Quảng Trị Mạng</Link>
                      <Link to="/NGANHHOC" className="dropdown-item">Thương Mại Điện Tử</Link>
                      <Link to="/CEH" className="dropdown-item">Khóa Học CEH</Link>
                      <Link to="/AWS" className="dropdown-item">Khóa Học AWS</Link>
                    </div>
                  </div>
                  <div className="col-rg-3 d-none d-lg-block collapse navbar-collapse justify-content-between">
                    <Link to='/UNGTUYEN' className="btn btn-primary py-2 px-4 d-none d-lg-block" >Ứng Tuyển Ngay</Link>
                  </div>
                </div>
              </div >
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;