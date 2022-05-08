import React from 'react';
import TableAll from './table-data';
import {Card, CardBody, CardText} from 'reactstrap';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';


//import demoAudio from '../../audio/SoundHelix-Song-1.mp3'
import 'react-h5-audio-player/lib/styles.css';

import './index.scss'


const SidebarUI = ({ isOpen, ...rest }) => {
    const classes = [
      'Sidebar',
      isOpen ? 'is-open' : '',
    ]
  
    return (
      <div aria-hidden={!isOpen} className={classes.join(' ')} {...rest} />
    )
  }
  
  SidebarUI.Overlay = props => <div className="SidebarOverlay" {...props} />
  
  SidebarUI.Content = ({ width = '30rem', isLeft = false, ...rest }) => {
    const classes = [
      'SidebarContent',
      isLeft ? 'is-left' : '',
    ]
    const style = {
      width,
      height: '100%',
      top: 0,
      left: isLeft ? `-${width}` : 'auto',
      right: !isLeft ? `-${width}` : 'auto',
    }
    
    return (
      <div
        className={classes.join(' ')}
        style={style}
        {...rest}
       />
    )
  }
  
  
  class Sidebar extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        isOpen: props.isOpen,
        selected: null,
        originalData: '',
        path: '',
        pathArray: [],
      }
      
      this.openSidebar = this.openSidebar.bind(this)
    }
    
    openSidebar(isOpen = true) {
      this.setState({ isOpen })
    }

    handleCallback = (childData) =>{
        if (childData !== null && childData !== undefined ) {
            this.setState({isOpen : true});
            this.setState({originalData: childData.original, pathArray:[{path: require(`../../audio/${childData.original.recording_url}`)}]},()=> console.log(this.state.originalData, this.state.pathArray))
            //import ('../../audio/SoundHelix-Song-1.mp3')
        }
    }
  
    render() {

      //let path = "../../audio/SoundHelix-Song-1.mp3"
      //let path = require("../../audio/SoundHelix-Song-1.mp3");
      //let audio = new Audio(path);
      const { isOpen } = this.state
      const { hasOverlay, isLeft } = this.props
      return (
        <SidebarUI isOpen={isOpen}>
          
          <TableAll parentCallback = {this.handleCallback}/>
          <SidebarUI.Content isright={isLeft}>
          <div style = {{marginTop: '80px'}}>


          <div className = "m-20">
			<Card className="border-1">
                            <CardBody>
                                <CardText>
                                <div  style = {{color: '#737475', fontSize:'16px', padding: '6px', marginBottom: '10px'}}><strong>Recording 43543</strong></div>
                                   {this.state.pathArray.map((m) => {
                                     return <AudioPlayer
                                     
                                     src={m.path}
                                     onPlay={e => console.log("onPlay")}
                                     customAdditionalControls={
                                      [
                                        RHAP_UI.LOOP,
                                        <a href={m.path} download="true">
                                        <i class="fas fa-download" style = {{width: '26px', height: '26px', color:'#868686', fontSize:'22px', marginLeft:'5px'}}></i>
                                        </a>
                                      ]
                                    }
                                     // other props here
                                   />
                                   })}
                                   
                                </CardText>

                            </CardBody>
						</Card>
			</div>
				
            <div className = "m-20">
			<Card className="border-1">
                            <CardBody>
                                <CardText>
                                    <div className= "row">
                                        <div className = "col-4 media media-sm media-list" style = {{textAlign: "center", justifyContent:"center",padding: '10px', margin: '5px', border: '1px solid rgba(57, 117, 225, 0.5)', borderRadius:'5px'}}>
					                        <div  className=" media-center">
						                        <img src="/assets/img/user/user-13.jpg" alt="" className="media-object rounded-corner" />
                                                <div className="media-body p-t-10">
					                                <h5 className="media-heading" style = {{color: '#737475'}}>{this.state.originalData.user_name}</h5>
                                                    <h6 style = {{color: '#737475'}}>ID # {this.state.originalData.user_id}</h6>
				                                </div>
					                        </div>
			                            </div>
                                            
                                        <div className = "col" style = {{display:'block' ,textAlign: "center", justifyContent:"center",paddingTop:'20px'}}>
                                        <div  style = {{color: '#737475', fontSize:'12px', padding: '3px'}}><strong>Gender :</strong> {this.state.originalData.gender}</div>
                                        <div  style = {{color: '#737475', fontSize:'12px', padding: '3px'}}><strong>Date of Birth  :</strong> {this.state.originalData.dob}</div>
                                        <div  style = {{color: '#737475', fontSize:'12px', padding: '3px'}}><strong>CNIC :</strong> {this.state.originalData.cnic}</div>
                                        <div  style = {{color: '#737475', fontSize:'12px', padding: '3px'}}><strong>Phone Number :</strong> {this.state.originalData.phone_no}</div>
                                        <div  style = {{color: '#737475', fontSize:'12px', padding: '3px'}}><strong>Email ID :</strong> {this.state.originalData.email}</div>
                                        </div>

                                    </div>
                                </CardText>

                            </CardBody>
						</Card>
			</div>
            <div className = "m-20">
			<Card className="border-1">
							
                            <CardBody>
                                <CardText>
								<div className="table-responsive">
									<table className="table m-b-0">
										<thead>
											<tr>
												<th>S.no</th>
												<th>Recording No.</th>
												<th>Date</th>
                                                <th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>2434</td>
												<td>25/09/2021</td>
                                                <td style = {{color:'#3975E1'}}>view more</td>
											</tr>
											<tr>
                                                <td>2</td>
												<td>4353</td>
												<td>25/09/2021</td>
                                                <td style = {{color:'#3975E1'}}>view more</td>
											</tr>
											<tr>
                                                <td>3</td>
												<td>5646</td>
												<td>25/09/2021</td>
                                                <td style = {{color:'#3975E1'}}>view more</td>
											</tr>
                                            <tr>
                                                <td>4</td>
												<td>5345</td>
												<td>25/09/2021</td>
                                                <td style = {{color:'#3975E1'}}>view more</td>
											</tr>
										</tbody>
									</table>
								</div>

                                </CardText>

                            </CardBody>
						</Card>
			</div>
			
		            </div>
          </SidebarUI.Content>
          {hasOverlay ? <SidebarUI.Overlay onClick={() => this.openSidebar(false)} /> : false}
      </SidebarUI>
      )
    }
  }
  
  const Home = () => (
    <div>
      <Sidebar hasOverlay />
    </div>
  )
  
  
export default Home;


