import "./myWorks.scss";

export default function MyWorks() {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "SnapOrder Consumer App",
      desc: "SnapOrder Consumer App helps kirana store consumers to order goods online and take delivery at their doorstep. I worked on incorporating JWT based authentication system to improve overall security of the app.",
      img: "./assets/snaporder.png",
      url: "https://play.google.com/store/apps/details?id=com.snapbizz.snaporder&hl=en_IN&gl=US",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "SnapOrder Merchant App",
      desc: "SnapOrder Merchant App helps kirana store owners to manage their inventory and delivery of the products. I implemented product search used by 10k+ kirana stores in the SnapOrder Merchant App.",
      img: "./assets/snapmerchant.png",
      url: "https://play.google.com/store/apps/details?id=com.snapbizz.snapmerchant&hl=en_IN&gl=US",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Fiserv App",
      desc: "Fiserv app helps to cater bank requirements related to payment.",
      img: "./assets/fiserv.png",
      url: "",
    },
  ];

  return (
    <div className="myworks" id="myworks">
      <div className="slider">
        <h1> My Works </h1>
        {data.map((d, key) => (
          <div className="container" key={key}>
            <div className="item">
              <div className="left">
                <a href={d.url} target="_blank" rel="noreferrer">
                  <img src={d.img} alt="" />
                </a>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <a href={d.url} target="_blank" rel="noreferrer" 
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
