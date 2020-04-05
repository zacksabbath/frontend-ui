import React from 'react';
// import styled from "styled-components";
// import { ImageButton } from "components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Homepage.css';
import { Avatar } from 'components';

// votePage = () => {
//   this.props.history.push()
// }

export default function Homepage(props: any) {
  return (
    <div>
      <div className="avatar-corner">
        <Avatar image="http://stump.zackrose.net/images/avatar1.png" />
      </div>
      <div className="logo">
        <img src="http://stump.zackrose.net/images/stump_logo.png" />
      </div>
      <h2 style={{ marginBottom: 100 }}>
        Your organic, local source for democracy.
      </h2>

      <div className="container">
        <button className="vote">
          <h2 className="btn-id">
            My Voting
            <br />
            Ballot
          </h2>
        </button>
        <button className="issues">
          <h2 className="btn-id">Browse Issues</h2>
        </button>
      </div>
      <button className="news">
        <h2 className="btn-id">News & Activities</h2>
      </button>
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
