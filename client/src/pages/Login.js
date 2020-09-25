import React, {useEffect, useState} from "react";
import Form from "../components/Form";
import { Redirect, Link } from "react-router-dom";
import API from "../utils/API";

function Login(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [auth, setAuth]=useState(false)



    useEffect(()=>{
        if(auth){
        return <Redirect to="/mainpage"/>
        }
    },[auth])

function handleInputChange(e){
    console.log("input change is happening")
    console.log(e.target.value)
let name = e.target.name
    switch(name){
        case "username":
            setUsername(e.target.value);
            break;
            case "password":
                setPassword(e.target.value);
                break;
                default: 
                  console.log('NaN');
                  break;
    }

}

function handleSubmit(e){
    e.preventDefault()
    console.log("it has been submitted")
    console.log(username)
    console.log(password)
  //this is where we would do an api call to utils/API.js and then a post route to express backend
  let data={
      username:username,
      password:password
  }
  API.login(data).then(response=>{
      console.log(response)
    //   if(response){
    //       setAuth(true)
    //   }
  })

}

  
    return (
      <div>
          {/* <nav className="container  items-center  flex-wrap border rounded-full bg-green-900 p-6 mt-8"> */}
          <nav className="container flex flex-col lobster justify-center bg-green-900 box-border sm:box-content px-4 pt-10 pb-20 m-6 max-w-sm border rounded-lg shadow-lg">
  <div className="flex flex-col items-center flex-shrink-0 text-white mr-6" >
      <svg className="fill-current h-10 w-12 mr-4" width="54" height="100" viewBox="0 0 100 100" id="e0958169-61ce-49c9-8f2a-5e3a81fc50e8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="886.35125" height="491.63114" viewBox="0 0 886.35125 491.63114"><title>navigator</title><circle cx="232.39589" cy="103.24635" r="50.76267" fill="#ff6584"/><path d="M548.40633,463.86269H299.37989a5.07941,5.07941,0,0,1-.93059-.07373L416.22735,259.78044a8.24649,8.24649,0,0,1,14.35487,0L509.62607,396.686l3.78685,6.55094Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><polygon points="391.582 259.678 306.558 259.678 348.296 199.052 351.3 194.685 352.802 192.502 356.589 199.052 391.582 259.678" opacity="0.2"/><path d="M687.06247,463.86269H471.67506l41.73786-60.62578,3.0036-4.36731,54.38818-79.007c3.56567-5.17807,12.14357-5.50052,16.33577-.97665a9.82994,9.82994,0,0,1,.7832.97665Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><circle cx="593.46332" cy="210.81982" r="15.29649" fill="#6c63ff"/><polygon points="594.938 256.894 591.805 256.894 593.233 208.516 594.938 256.894" fill="#3f3d56"/><polygon points="593.509 217.685 596.873 213.031 593.463 218.837 593.095 218.192 593.509 217.685" fill="#3f3d56"/><polygon points="593.141 222.384 589.777 217.731 593.187 223.536 593.555 222.891 593.141 222.384" fill="#3f3d56"/><circle cx="733.78005" cy="210.81982" r="15.29649" fill="#6c63ff"/><polygon points="735.254 256.894 732.121 256.894 733.55 208.516 735.254 256.894" fill="#3f3d56"/><polygon points="733.826 217.685 737.19 213.031 733.78 218.837 733.411 218.192 733.826 217.685" fill="#3f3d56"/><polygon points="733.458 222.384 730.094 217.731 733.504 223.536 733.872 222.891 733.458 222.384" fill="#3f3d56"/><circle cx="637.77455" cy="188.84646" r="22.59164" fill="#6c63ff"/><polygon points="639.952 256.894 635.325 256.894 637.434 185.444 639.952 256.894" fill="#3f3d56"/><polygon points="637.843 198.985 642.81 192.113 637.775 200.687 637.23 199.734 637.843 198.985" fill="#3f3d56"/><polygon points="637.298 205.926 632.331 199.054 637.366 207.627 637.911 206.675 637.298 205.926" fill="#3f3d56"/><circle cx="692.86823" cy="188.84646" r="22.59164" fill="#6c63ff"/><polygon points="695.046 256.894 690.419 256.894 692.528 185.444 695.046 256.894" fill="#3f3d56"/><polygon points="692.936 198.985 697.904 192.113 692.868 200.687 692.324 199.734 692.936 198.985" fill="#3f3d56"/><polygon points="692.392 205.926 687.424 199.054 692.46 207.627 693.004 206.675 692.392 205.926" fill="#3f3d56"/><circle cx="549.96899" cy="188.84646" r="22.59164" fill="#6c63ff"/><polygon points="552.146 256.894 547.519 256.894 549.629 185.444 552.146 256.894" fill="#3f3d56"/><polygon points="550.037 198.985 555.004 192.113 549.969 200.687 549.425 199.734 550.037 198.985" fill="#3f3d56"/><polygon points="549.493 205.926 544.525 199.054 549.561 207.627 550.105 206.675 549.493 205.926" fill="#3f3d56"/><path d="M974.074,695.81557H236.80819a70.734,70.734,0,1,1,0-141.468H972.44164a27.20538,27.20538,0,0,0,0-54.41076H212.32335v-43.5286H972.44164a70.734,70.734,0,1,1,0,141.468H236.80819a27.20538,27.20538,0,1,0,0,54.41076H974.074Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><rect x="82.70435" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="82.70435" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="82.70435" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><path d="M732.01016,298.87947a28.99191,28.99191,0,0,0-6.04507-5.70351h12.62379A21.11412,21.11412,0,0,0,732.01016,298.87947Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M690.74325,293.176h2.17616c-.46752.32845-.93648.65539-1.38307,1.01036C691.28145,293.84181,691.00932,293.51136,690.74325,293.176Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M748.69208,290.55856a20.83292,20.83292,0,0,1,10.12924,2.6174H738.58888A20.74188,20.74188,0,0,1,748.69208,290.55856Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M709.43111,287.94117a28.623,28.623,0,0,1,16.534,5.23479H692.91941A28.61637,28.61637,0,0,1,709.43111,287.94117Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M487.03606,254.80744a53.65615,53.65615,0,0,1,105.27431-11.3126c.65-.02332,1.29951-.04944,1.95522-.04944a53.66909,53.66909,0,0,1,51.48218,38.53833A37.92036,37.92036,0,0,1,690.74325,293.176h-167.372a36.29323,36.29323,0,0,1-36.37313-37.57718Q487.01422,255.2037,487.03606,254.80744Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M777.58705,338.05522a28.99214,28.99214,0,0,1,6.04507-5.70351H771.00833A21.11388,21.11388,0,0,1,777.58705,338.05522Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M818.854,332.35171h-2.17616c.46752.32845.93647.65539,1.38306,1.01036C818.31576,333.01756,818.5879,332.68711,818.854,332.35171Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M760.90514,329.73431a20.83286,20.83286,0,0,0-10.12924,2.6174h20.23243A20.74171,20.74171,0,0,0,760.90514,329.73431Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M800.16611,327.11691a28.62293,28.62293,0,0,0-16.534,5.2348h33.04569A28.61635,28.61635,0,0,0,800.16611,327.11691Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M1022.56115,293.98318a53.65615,53.65615,0,0,0-105.27431-11.31259c-.65-.02333-1.29951-.04945-1.95522-.04945a53.66909,53.66909,0,0,0-51.48218,38.53833A37.92038,37.92038,0,0,0,818.854,332.35171H986.226a36.29324,36.29324,0,0,0,36.37314-37.57719Q1022.583,294.37945,1022.56115,293.98318Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><rect x="910.97675" y="662.3144" width="19.45264" height="3.08772" transform="translate(1684.22678 1124.02413) rotate(-179.96937)" fill="#3f3d56"/><path d="M770.33154,663.006l4.01354.92846,152.53335.08154,1.37161-3.19572a32.257,32.257,0,0,0,2.37148-17.44193c-.65694-4.4136-2.30315-8.79914-6.04213-10.70394L917.8105,587.59l-84.38886-.151L800.7719,613.77308s-15.40137-.27686-23.7685,10.13972a24.44959,24.44959,0,0,0-5.1143,13.46591l-.33022,5.41878Z" transform="translate(-156.82437 -204.18443)" fill="#6c63ff"/><circle cx="647.00933" cy="458.0675" r="18.83509" fill="#3f3d56"/><circle cx="647.00933" cy="458.0675" r="9.91321" fill="#ccc"/><circle cx="739.94969" cy="458.11718" r="18.83509" fill="#3f3d56"/><circle cx="739.94969" cy="458.11718" r="9.91321" fill="#ccc"/><polygon points="656.92 406.511 702.483 406.53 708.045 406.53 717.435 406.537 717.435 405.852 717.442 397.594 717.449 388.322 711.201 388.322 705.639 388.316 695.787 388.309 690.225 388.309 678.851 388.302 656.92 406.511" fill="#fff"/><polygon points="724.849 406.544 748.929 406.557 748.935 401.832 748.935 393.574 748.942 388.342 745.416 388.342 739.854 388.335 724.856 388.329 724.849 406.544" fill="#fff"/><rect x="871.16473" y="624.30978" width="3.08772" height="5.86667" transform="translate(1588.2574 1050.7682) rotate(-179.96937)" fill="#3f3d56"/><rect x="821.61203" y="614.55698" width="3.08772" height="5.86667" transform="translate(1284.26173 -409.51982) rotate(90.03063)" fill="#3f3d56"/><path d="M817.13838,604.397h.33966a6.45333,6.45333,0,0,1,6.45333,6.45333v0a6.45333,6.45333,0,0,1-6.45333,6.45333h-.33966a0,0,0,0,1,0,0V604.397A0,0,0,0,1,817.13838,604.397Z" transform="translate(1483.91874 1017.9547) rotate(-179.96937)" fill="#3f3d56"/><path d="M771.55888,642.79749a9.97473,9.97473,0,0,0,5.44452-18.88469,24.44959,24.44959,0,0,0-5.1143,13.46591Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><polygon points="705.639 388.316 717.435 405.852 717.442 397.594 711.201 388.322 705.639 388.316" fill="#f2f2f2"/><polygon points="739.854 388.335 748.935 401.832 748.935 393.574 745.416 388.342 739.854 388.335" fill="#f2f2f2"/><polygon points="690.225 388.309 702.483 406.53 708.045 406.53 695.787 388.309 690.225 388.309" fill="#f2f2f2"/><circle cx="50.0579" cy="260.92953" r="50.0579" fill="#3f3d56"/><path d="M207.09056,480.18425l-25.05073-25.05073a4.35315,4.35315,0,0,1,6.15628-6.15628L206.674,467.45511l58.96394-67.23927a4.35271,4.35271,0,0,1,6.54523,5.7397Z" transform="translate(-156.82437 -204.18443)" fill="#6c63ff"/></svg>
    <Link to="/" className="items-center text-xl tracking-tight">Take a Hike</Link>
  </div>
        <Form handleInputChange={handleInputChange} handleSubmit={()=>handleSubmit}/>
        </nav>
        
      </div>
    );
  }
  
  export default Login;