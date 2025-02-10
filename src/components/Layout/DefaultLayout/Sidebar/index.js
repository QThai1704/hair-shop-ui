import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);
function Sidebar() {
    return (
        <div className={cx("sidebar")}>

        </div>
    );
}

export default Sidebar;