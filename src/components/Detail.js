import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase/firebase";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import LoadingOverlay from 'react-loading-overlay-ts';


const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetail] = useState({});
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
                setDetail(doc.data());
            }
            else{
                console.log("file dont exixt");
            }
        }).catch((err) => {
            console.log("Error occured", err);
        });
    },[id]);
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
        setActive(true);
          if (trailerUrl){
              setTrailerUrl('');
              setActive(false);
          }
          else{
              movieTrailer(movie?.title || "")
              .then((url) =>{
                  const urlParam = new URLSearchParams(new URL(url).search);
                  setTrailerUrl(urlParam.get("v"));
                  setActive(false);
              }).catch((err) => console.log(err));
          }
      }

      const handleExit = () => {
        if (trailerUrl){
            setTrailerUrl('');
        }
      }
    return (
        <Container>
            
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>
            <MovieContent onClick={()=> handleExit()}>
                <ContentDetail>
                    <ImageTitle>
                        <img alt={detailData.title} src={detailData.titleImg} />
                    </ImageTitle>
                    <ContentMeta>
                        <Controls>
                          <Player>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>Play</span>
                          </Player>
                          <Trailer onClick = {() => handleClick(detailData)}>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                          </Trailer>
                          <AddList>
                            <span />
                            <span />
                          </AddList>
                          <GroupWatch>
                            <div>
                              <img src="/images/group-icon.png" alt="" />
                            </div>
                          </GroupWatch>
                        </Controls>
                        <SubTitle>{detailData.subTitle}</SubTitle>
                        <Description>{detailData.description}</Description>
                     </ContentMeta>
                </ContentDetail>
                
                 <Movie>
                
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
                
                 </Movie>
            </MovieContent>
            
        </Container>
    );
}

const Container = styled.section`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img {
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px) {
            width: initial;
        }
    }
`;
const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const MovieContent = styled.div`
    display: grid;
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const ContentDetail = styled.div`

`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Movie = styled.div`
    margin-top: 30vh;
    width: 100%;
    @media (max-width: 768px) {
        margin-top: 0;
        padding-top: 5vh;
      }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div {
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
        img {
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default Detail;