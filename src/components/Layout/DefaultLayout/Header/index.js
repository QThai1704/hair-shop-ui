import classnames from "classnames/bind";
import styles from './Header.module.scss';
import { Dropdown, Button, Form, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCheck, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import flagVietNam from '~/static/image/flags/vietnam.png';
import flagUS from '~/static/image/flags/united-states.png';
import flagKorea from '~/static/image/flags/south-korea.png';
import flagUK from '~/static/image/flags/united-kingdom.png';
import avatar from '~/static/image/avatar/XS.jpg';

const cx = classnames.bind(styles);

function Header() {
    return (
        <div className={cx("header")}>
            <Col xs={2}>
                <h1 className={cx("header__logo")}>Quang Lan</h1>
            </Col>
            <Col xs={10} className={cx("header__navbar", "d-flex", "justify-content-between")}>
                <Col xs={3} className={cx("d-flex", "align-items-center")}>
                    <div>
                        <Button className={cx("header__navbar--btn")}>
                            <FontAwesomeIcon icon={faBars} className={cx("header__navbar--btn-icon", "size-icon")} />
                        </Button>
                    </div>
                    <div className={cx("full-width")}>
                        <Form className="header__navbar--search">
                            <Form.Control
                                type="text"
                                placeholder="Tìm kiếm"
                                className={cx("header__navbar--search-input")}
                            />
                        </Form>
                    </div>
                </Col>
                <Col xs={5} className={cx("settings", "d-flex", "align-items-center")}>
                    <div className={cx("settings__notification")}>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="link" id="notification-dropdown" className={cx("none")}>
                                <FontAwesomeIcon icon={faBell} className={cx("settings__notification--icon", "size-icon")} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={cx("settings__notification--dropdown")}>
                                <Dropdown.Header className={cx("settings__notification--dropdown-header")}>Thông báo</Dropdown.Header>
                                <hr />
                                <Dropdown.Item>Thông báo 1</Dropdown.Item>
                                <Dropdown.Item>Thông báo 2</Dropdown.Item>
                                <Dropdown.Item>Thông báo 3</Dropdown.Item>
                                <Dropdown.Item>Thông báo 4</Dropdown.Item>
                                <Dropdown.Item>Tất cả thông báo</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="settings__languages">
                        <Dropdown className={cx("focus")}>
                            <Dropdown.Toggle id="dropdown-basic" className={cx("settings__languages--toggle")}>
                                <Image src={flagVietNam} rounded className={cx("flag")} />
                                <span className={cx("flag-name")}>Việt Nam</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={cx("settings__languages--dropdown")}>
                                <Dropdown.Item href="#/action-1" className={cx("settings__languages--dropdown-item")}>
                                    <Image src={flagVietNam} rounded />
                                    <span className={cx("flag-name")}>Việt Nam</span>
                                    <FontAwesomeIcon icon={faCheck} className={cx("icon-check")} />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className={cx("settings__languages--dropdown-item")}>
                                    <Image src={flagUS} rounded />
                                    <span className={cx("flag-name")}>Mỹ</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className={cx("settings__languages--dropdown-item")}>
                                    <Image src={flagUK} rounded />
                                    <span className={cx("flag-name")}>Anh</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className={cx("settings__languages--dropdown-item")}>
                                    <Image src={flagKorea} rounded />
                                    <span className={cx("flag-name")}>Hàn Quốc</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className={cx("settings__info", "d-flex")}>
                        <div className={cx("d-flex", "align-items-center")}>
                            <Image src={avatar} roundedCircle className={cx("settings__info--avatar")} />
                            <div className={cx("settings__info--title")}>
                                <p className={cx("settings__info--user")}>Quang Lan</p>
                                <p className={cx("settings__info--role")}>Amin</p>
                            </div>
                        </div>
                        <Dropdown className={cx("d-flex", "align-items-center")}>
                            <Dropdown.Toggle id="dropdown-basic" className={cx("lg", "settings__info--toggle")}></Dropdown.Toggle>
                            <Dropdown.Menu className={cx("settings__info--dropdown")}>
                                <Dropdown.Item href="#/action-1">Thông tin cá nhân</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">...</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Col>
        </div >
    );
}

export default Header;