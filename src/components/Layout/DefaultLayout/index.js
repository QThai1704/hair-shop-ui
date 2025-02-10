import classnames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <Container fluid className={cx("wrapper")}>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className={cx("body")}>
                <Col xs={2} className={cx("p-0")}>
                    <Sidebar />
                </Col>
                <Col xs={10} className={cx("p-0")}>
                    <div className={cx("content")}>
                        {children}
                    </div>
                    <Footer />
                </Col>
            </Row>

        </Container>
    );
}

export default DefaultLayout;