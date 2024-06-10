
function Footer() {
    return (
        <div>
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ margintop: '90px' }}>
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5 className="text-primary text-uppercase mb-4" style={{ letterspacing: '5px' }}>Liên Lạc</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>240 Võ Văn Ngân, phường Bình Thọ, TP Thủ Đức, TPHCM</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+0938 205 966</p>
                <p><i className="fa fa-envelope mr-2"></i>quangcao@ispace.edu.vn</p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" ><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light btn-square mr-2" ><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-square mr-2" ><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-outline-light btn-square" ><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5 className="text-primary text-uppercase mb-4" style={{ letterspacing: '5px' }}>Ngành Học</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>An Ninh Mạng</a>
                  <a className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Phát Triển Phần Mềm</a>
                  <a className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Thương Mại Điện Tử</a>
                  <a className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Thiết Kế Đồ Họa</a>
                  <a className="text-white" ><i className="fa fa-angle-right mr-2"></i>KHÓA HỌC AWS</a>
                  <a className="text-white" ><i className="fa fa-angle-right mr-2"></i>KHÓA HỌC CEH (V12)</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5 className="text-primary text-uppercase mb-4" style={{ letterspacing: '5px' }}>Cần Tư Vấn?</h5>
            <p>Hãy liên lạc chúng tôi qua email của bạn</p>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Email" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Gửi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
        </div>
    )
}
export default Footer;