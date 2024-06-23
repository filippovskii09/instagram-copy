// import styles from "../Profile/Profile.module.scss";
// import AvatarImage from "../../../../public/images/avatar.png";

// const Profile = () => {

//   return (
//     <section className={styles.profile}>
//       <div className={styles.info}>
//         {userLogin ? (
//           <div className={styles.top}>
//             <h5 className={`${styles.username} ${styles.active}`}>
// 						username
//             </h5>
//             <button className={styles.burger}>
//               <div className={styles.line}></div>
//               <div className={styles.line}></div>
//               <div className={styles.line}></div>
//             </button>
//           </div>
//         ) : (
//           <div className={styles.top}>
//             <button className={styles.back}>
//               <img src={BackButtonImage} alt="back-button" />
//             </button>
//             <h5 className={styles.username}>{username}</h5>
//             <button className={styles.dots}>
//               <div className={styles.dot}></div>
//               <div className={styles.dot}></div>
//               <div className={styles.dot}></div>
//             </button>
//           </div>
//         )}
//         <div className={styles.userInfo}>
//           <div className={styles.userInfoTop}>
//             <img src={AvatarImage} alt="avatar logo" className={styles.image} />
//             <div className={styles.infoRow}>
//               <div className={styles.infoColumn}>
//                 <p className={styles.columnCount}>{posts.lenght}</p>
//                 <p className={styles.columnName}>Posts</p>
//               </div>
//               <div className={styles.infoColumn}>
//                 <p className={styles.columnCount}>{followers.lenght}</p>
//                 <p className={styles.columnName}>Followers</p>
//               </div>
//               <div className={styles.infoColumn}>
//                 <p className={styles.columnCount}>{following.lenght}</p>
//                 <p className={styles.columnName}>Following</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.userName}>Artur Filippovskii</div>
//         </div>
//         <div className={styles.userActions}>
//           {userLogin ? (
//             <button className={styles.action}>Edit profile</button>
//           ) : (
//             <>
//               <button className={`${styles.action} ${styles.secondaryButton}`}>
//                 Folow
//               </button>
//               <button className={styles.action}>Message</button>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;
