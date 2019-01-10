import React,{ Component } from 'react';
import Ionicon from 'react-ionicons';

const SliderItem = (props) => {
    let TextData = []; let iconMember='';
     TextData.push(props)
    return (
        TextData.map((data) => {
                    if(data.iconOpt)
                    {
                       iconMember = <Ionicon color="#ffffff" icon={data.iconOpt} fontSize="0.95rem"></Ionicon>
                    }
                    return (
                        <div className="item1" title="JUET,Guna"><div className="TextContainer">
                        <p className="TextTitle">{data.TextTitle}</p>
                        <p className="TextContent">{iconMember}{data.TextContent}</p>
                        </div>
                        </div>
                    )
                })
    )
}

const SliderAcademicItem = (props) => {
    let TextData = []; let iconMember='';
    TextData.push(props)
    return (
        TextData.map((data) => {
            if(data.iconOpt)
            {
                iconMember = <Ionicon color="#ffffff" icon={data.iconOpt} fontSize="2rem"></Ionicon>
            }
            return (
                <div className="AdminItem1"><div className="AdminItemTextContainer">
                    <p>
                        {iconMember}<br/>
                        {data.AdminTextToDisplay}
                    </p>
                </div>
                </div>
            )
        })
    )
}

const SliderStudentItem = (props) => {
    let TextData = []; let iconMember='';
    TextData.push(props)
    return (
        TextData.map((data) => {
            if(data.iconOpt)
            {
                iconMember = <Ionicon color="#ffffff" icon={data.iconOpt} fontSize="2rem"></Ionicon>
            }
            return (
                <div className="StudentItem1" ><div className="StudentItemTextContainer">
                    <p>
                        {iconMember}<br/>
                        {data.StudentTextToDisplay}
                    </p>
                </div>
                </div>
            )
        })
    )
}
class IntroSection extends Component
{
 render()
 {
     return(
         <div className="college_introSection">
             <div className="photosContainer">
                 <SliderItem TextTitle="University Main Entrance@Beautiful Campus" TextContent="Jaypee University of Engineering &amp; Technology, Guna" />
                 <SliderItem TextTitle="Beautiful Campus , Lush Green Environment" TextContent="Jaypee University of Engineering &amp; Technology, Guna" />
                 <SliderItem TextTitle="Celebration of 72nd Independence Day" iconOpt="md-calendar" TextContent="15th.Aug.18 Jaypee University of Engineering &amp; Technology, Guna" />
                 <SliderItem TextTitle="D'Equinox 2k19" iconOpt="md-calendar" TextContent="&nbsp; Coming Soon !!,A Cultural Fest by Jaypee University of Engineering &amp; Technology,Guna" />

                 <div className="indicatePoints">
                     <span className="point1"></span>
                     <span className="point2"></span>
                     <span className="point3"></span>
                 </div>
             </div>
             <div className="LatestHappenings">
                 <div className="AdminRelated" title="Academics News">
                     <SliderAcademicItem iconOpt="md-trophy" AdminTextToDisplay="NIRF - Ranking 150-200 Accredited With Grade A by NAAC"/>
                     <SliderAcademicItem iconOpt="md-trophy" AdminTextToDisplay="NIRF - Ranking 150-200 Accredited With Grade A by NAAC"/>
                     <SliderAcademicItem iconOpt="md-trophy" AdminTextToDisplay="NIRF - Ranking 150-200 Accredited With Grade A by NAAC"/>
                     <SliderAcademicItem iconOpt="md-trophy" AdminTextToDisplay="NIRF - Ranking 150-200 Accredited With Grade A by NAAC"/>
                 </div>
                 <div className="StudentRelated" title="Student News">
                     <SliderStudentItem iconOpt="md-calendar" StudentTextToDisplay="Workshop on C Programming By CSI from 17-19th.Sep.18"/>
                     <SliderStudentItem iconOpt="md-calendar" StudentTextToDisplay="Mozilla AR/VR Workshop on 20th.Oct.18"/>
                     <SliderStudentItem iconOpt="md-calendar" StudentTextToDisplay="Workshop on PHP Programming By CSI from 17-19th.Nov.18"/>
                     <SliderStudentItem iconOpt="md-calendar" StudentTextToDisplay="Workshop on Arduino Programming By ISF from 17-19th.Dec.18"/>
                  </div>
             </div>
         </div>
     )

 }

}

export default IntroSection;