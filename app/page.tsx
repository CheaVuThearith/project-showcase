"use client"
import ShowcaseBox from "./_components/ShowcaseBox";

export default function Home() {
  const projectLinks = {
    "trello navbar":"https://trello-homepage-clone-blush.vercel.app/",
    "spotify front end clone" : "https://spotifyclone-psi.vercel.app/",
    "mini games" : "https://tetris-five-ochre.vercel.app/"
  }
  
  return (
    <>
    <div className="grid absolute inset-0 grid-cols-3 items-center justify-items-center">
      {Object.entries(projectLinks).map((project, index)=>
      <ShowcaseBox name={project[0]} link={project[1]} key={index}/>
      )}
    </div>
    </>
  );
}
