import React from "react";
import "./footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import Link from '@material-ui/core/Link';
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="logo">
          <h1>
          Jannes
          <br />
          Tapeter
          </h1>
        </div>
          <h6>Hos oss på Jannes Tapeter hittar ni kollektioner från världens mest exklusiva tapetdesigners. Tveka inte att höra av er till oss för rådgivning och hjälp. </h6>
          <div>
         
          <Link href="mailto: info@jannestapeter.se">
    <MailOutlineIcon />
  </Link>
  <Link target="_blank"  href="https://www.facebook.com/"><FacebookIcon /></Link>

<Link target="_blank"  href="https://www.instagram.com/">
<InstagramIcon />
</Link>

<Link  target="_blank" href="https://www.google.com/maps/place/Bygdeg%C3%A5rden/@57.4745103,13.2529158,15z/data=!4m13!1m7!3m6!1s0x465065439ad193fd:0xa01907aa3405a90!2s514+92+Uddebo!3b1!8m2!3d57.474512!4d13.2616706!3m4!1s0x465065f45f8ba5a5:0x9e8e3bcf05f13b86!8m2!3d57.4751313!4d13.2649371" >
<RoomIcon />
</Link>

</div>
<h5>Jannes Tapeter • Uddebogatan 9, 514 92
Uddebo • +46 (0)70 123 45 67</h5>

      </footer>
    );
  }
}

export default Footer;
