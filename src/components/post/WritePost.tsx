import { AiOutlineClose, AiOutlineCaretDown } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { BiPhotoAlbum } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsFlag } from "react-icons/bs";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
export default function WritePost() {
  return (
    <div className="write-post-body">
        <div className="write-post-container">
            <div className="write-post-header">
                <div><h2>Create post</h2></div>
                <div className="write-post-close-icon"><AiOutlineClose size={25} /></div>
            </div>
            <div className="write-post-hr"/>
            <div className="write-post-friend">
                <div><BsPersonCircle className="write-post-face-icon" size={40}/></div>
                <div className="write-post-name-friend">
                    <div className="write-post-text"><h5>Omar Alwahiby</h5></div>
                    <div className="write-post-btn-friend">
                        <div className="write-post-center"><FaUserFriends /></div>
                        <div className="write-post-center">Friends</div>
                        <div className="write-post-center"><AiOutlineCaretDown /></div>
                    </div>
                </div>
            </div>
            <div className="write-post-area">
                 <input className="write-post-input" type="text" placeholder="What's on your mind, Omar?"/>
            </div>
            <div className="write-post-color">
                <div><img className="write-post-img" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" /></div>
                <div><VscSmiley className="write-post-emoji" size={30}/></div>
            </div>
            <div className="add-to-your-post">
                <div className="write-post-p-text"><p>Add to your post</p></div>
                <div className="write-post-flex-icons">
                   <div><BiPhotoAlbum className="write-photo-icon" size={24}/></div>
                   <div><BsFillPersonFill className="write-person-icon" size={24}/></div>
                   <div><CgSmileMouthOpen className="write-feeling-icons" size={24}/></div>
                   <div><GoLocation className="write-location-icon" size={24}/></div>
                   <div><BsFlag className="write-flag-icon" size={24}/></div>
                   <div><FiMoreHorizontal className="write-more-icon" size={24}/></div>
                </div>
            </div>
            <div className="write-post-btn-post">Post</div>
        </div>
    </div>
  )
}
