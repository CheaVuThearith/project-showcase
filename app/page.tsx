"use client"
import ShowcaseBox from "./_components/ShowcaseBox";

export default function Home() {
  const projectLinks = {
    "Inter Scholar": "https://interscholar.vercel.app/",
    "trello navbar":"https://trello-homepage-clone-blush.vercel.app/",
    "spotify front end clone" : "https://spotifyclone-psi.vercel.app/",
    "mini games" : "https://tetris-five-ochre.vercel.app/"
  }
  
  return (
    <>
    <div className="flex absolute inset-0 items-center justify-center gap-12 flex-wrap">
      {Object.entries(projectLinks).map((project, index)=>
      <ShowcaseBox name={project[0]} link={project[1]} key={index}/>
      )}
    </div>
    </>
  );
}
