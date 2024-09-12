import { Concert_One } from "next/font/google";


const font = Concert_One({
    subsets: ['latin'], 
    weight: '400',
  });

const Paragraph = () => {
    return ( 
        <h1 className={`mx-6 font-semibold mb-6 ${font.className}`}>
            Wanna see how we make our food?
        </h1>
     );
}
 
export default Paragraph;