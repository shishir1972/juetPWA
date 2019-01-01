import React,{Component} from 'react';

const GetCardsToShow = (props)=>{
    return(
        <div className="AnnouncementsCardNew">
            <img src={props.CardImage} className="AnnouncementsCardPhoto"/>
            <h3>{props.CardHeading}</h3>
            <div className="AnnouncementsNewText">
                <p>{props.CardData}</p>
            </div>
            <div className="CardNewButton">Read More >></div>
        </div>
    )
};

class AnnouncementsCards extends Component
{
constructor(props) {
    super(props);
    this.state = {
        liveStatus: props.statusToShow,
        data: [
            {
                id: '1',
                imageForCard: '/static/images/campus3.jpg',
                HeadingText: 'Swachh Bharat Campaign By JUET, Guna',
                AnnouncementData: 'Lorem ipsum , dolorum rem inventore sunt ratione? Unde nam sit nostrum consequatur ipsa\n' +
                    '                    dicta autem atque debitis quia odit distinctio voluptas quo pariatur blanditiis, laborum\n' +
                    '                    commodi? Praesentium, nostrum tenetur.'
            },
            {
                id: '2',
                imageForCard: '/static/images/campus3.jpg',
                HeadingText: 'Swachh Bharat Campaign By JUET, Guna',
                AnnouncementData: 'Lorem ipsum , dolorum rem inventore sunt ratione? Unde nam sit nostrum consequatur ipsa\n' +
                    '                    dicta autem atque debitis quia odit distinctio voluptas quo pariatur blanditiis, laborum\n' +
                    '                    commodi? Praesentium, nostrum tenetur.'
            },
            {
                id: '3',
                imageForCard: '/static/images/campus3.jpg',
                HeadingText: 'Swachh Bharat Campaign By JUET, Guna',
                AnnouncementData: 'Lorem ipsum , dolorum rem inventore sunt ratione? Unde nam sit nostrum consequatur ipsa\n' +
                    '                    dicta autem atque debitis quia odit distinctio voluptas quo pariatur blanditiis, laborum\n' +
                    '                    commodi? Praesentium, nostrum tenetur.'
            },
            {
                id: '4',
                imageForCard: '/static/images/campus4.jpg',
                HeadingText: 'Swachh Bharat Campaign By JUET, Guna',
                AnnouncementData: 'Lorem ipsum , dolorum rem inventore sunt ratione? Unde nam sit nostrum consequatur ipsa\n' +
                    '                    dicta autem atque debitis quia odit distinctio voluptas quo pariatur blanditiis, laborum\n' +
                    '                    commodi? Praesentium, nostrum tenetur.'
            }
        ],
        limitToShow: ''
    };
}

    render()
    {
     if(this.state.liveStatus)
     {
         return(
             <div className="AnnouncementsNew">
                 <h1>Announcements</h1><span className="line"></span>
                 <div className="AnnouncementsNewContainer">
                     {this.state.data.map((data)=>{
                         return (
                             <GetCardsToShow CardImage={data.imageForCard} CardHeading={data.HeadingText} CardData={data.AnnouncementData} />
                         )
                     })}
                 </div>
             </div>
         )
     }
     else
     {
         return(
             <div>
                 Announcements are Deactivated
             </div>
         )
     }

    }
}

export default AnnouncementsCards;
