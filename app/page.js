import NavBar from "@/app/components/navbar";
import SliderComponent from "@/app/components/slide";
import Paragraph from "@/app/components/paragraph";
import YoutubePlayer from "@/app/components/YoutubePlayer";

const Dashboard = () => {
  return ( 
    <main>
      <div>
        <NavBar/>
      </div>
      <div>
        <SliderComponent/>
      </div>
      <div>
        <Paragraph/>
      </div>
      <div>
        <YoutubePlayer videoId="rEdl2Uetpvo" />
      </div>
    </main>
   );
}
 
export default Dashboard;