import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

const TopBar = ({listpage}:{listpage:boolean}) => {
    return(
        <S.TopHeader>
            <div className="title-box">
                <img src={'/main_logo.png'} alt="포켓몬도감 로고이미지" />
                <h1 className="title">포켓몬도감</h1>
            </div>
            <div className="search-box">
                <div className="search">
                    <input type="text" placeholder='포켓몬을 검색하세요'/>
                    <div className="icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                {!listpage && <button className="list-btn">목록으로</button>}
            </div>
        </S.TopHeader>
    )
}

export default TopBar;