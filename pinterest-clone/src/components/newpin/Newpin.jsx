import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";
// import { Input } from "antd";




import "./Newpin.css";

export class Newpin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
   
    return (
      <div className="App">
       
        <div
        
          style={{
            display: "flex",
            width:"880px",
            height:"600px",
            margin:"auto",
            paddingTop:"50px",
            borderRadius:"10px",
            paddingRight:"10px",
            boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            
          }}
        >
          <div style={{ marginRight: "40px" }}>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              buttonText="Drag and drop or click to upload"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
             
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                marginBottom: "10px"
              }}
            >
              
              <input  style={{
                fontSize:"36px",
                fontWeight:"700",
                color:"grey",
                border:"transparent",
                borderBottom:"1px solid grey"
              }}  type="text" placeholder="Add your title" /> <br /><br /><br /><br />
               <textarea  style={{
                fontSize:"15px",
                fontWeight:"400",
                color:"grey",
                border:"transparent",
                borderBottom:"1px solid grey"
              }}   placeholder="Tell everyone what your pin is about" />
              
            </div>
            
          </div>
          <button style={{background:"#E60023",width:"80px",height:"35px",border:"none",borderRadius:"10px"}}>Save</button>
        </div>
      </div>
    );
  }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Newpin />, rootElement);
