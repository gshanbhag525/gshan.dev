import "./myWorks.scss";

export default function MyWorks() {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "SnapOrder Consumer App",
      desc: "Incorporated JWT based authentication system.",
      img: "./assets/snaporder.png",
      url: "https://play.google.com/store/apps/details?id=com.snapbizz.snaporder&hl=en_IN&gl=US",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "SnapOrder Merchant App",
      desc: "Implemented product search used by 10k+ kirana stores.",
      img: "./assets/snapmerchant.png",
      url: "https://play.google.com/store/apps/details?id=com.snapbizz.snapmerchant&hl=en_IN&gl=US",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Fiserv App",
      desc: "Implemented product search used by 10k+ kirana stores.",
      img: "./assets/fiserv.png",
      url: "",
    },
  ];

  return (
    <div className="myworks" id="myworks">
      <div className="slider">
        <h1> My Works </h1>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="right">
                <a href={d.url} target="_blank">
                  <img src={d.img} alt="" />
                </a>
              </div>
              <div className="left">
                <div className="leftContainer">
                  <a href={d.url} target="_blank" 
                    style={{textDecoration:"none", 
                      color:"black",}}>
                    <h2>{d.title}</h2>
                  </a>
                  <span>SDE - SnapBizz CloudTech Pvt. Ltd.</span>

                  <p>{d.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
