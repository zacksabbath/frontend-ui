import React from "react";
// import styled from "styled-components";
// import { ImageButton } from "components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Homepage(props: any) {
  return (
    <div>

      <div className="logo">
        <img src="http://stump.zackrose.net/images/stump_logo.png" />
      </div>

      <div className="container">
        <button className="vote">My Voting Ballot</button>
        <button className="issues">Browse Issues</button>
      </div>
        <button className="news">News & Activities</button>

    </div>
  );
}

// const ContainerWrapper = styled.div`
//   .logo img {
//     width: 50%;
//     margin: 80px;
//   }
//   .container {
//     display: flex;
//   }
// `;

// export default function Homepage(props: any) {
//   return (
//     <ContainerWrapper>
//       <div className="logo">
//         <img src="http://stump.zackrose.net/images/stump_logo.png" />
//       </div>
//       <div className="container">
//         <ImageButton
//           text="My Voting Ballot"
//           image="http://stump.zackrose.net/images/voting_ballot.png"
//         />
//         <ImageButton
//           text="Browse Issues"
//           image="http://stump.zackrose.net/images/issues.png"
//         />
//       </div>
//       <ImageButton
//         text="News & Activities"
//         image="http://stump.zackrose.net/images/news.png"
//       />
//     </ContainerWrapper>
//   );
// }
