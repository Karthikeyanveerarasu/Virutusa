import React from 'react'
import image from './image-1.jpg'
import './workshoppage.css'
function Workshoppage() {
    const eventList = [
        {
            img: image,
            name: "yuddhavarna",
            link: '/eventdetails',
            descrip: "ji hieffie ie ifheiuh en e ehf en iufe efih e iuh   ie  eiuhfe  efneifeilfe ieil",
            pay: 0,
            date: '20-10-2023',
            time: '10:00 AM',
            place: 'India'
        },
        {
            img: image,
            name: "Aathalya",
            link: '/eventdetails',
            descrip: "ji hieffie ie ifheiuh en e ehf en iufe efih e iuh   ie  eiuhfe  efneifeilfe ieil",
            pay: 0,
            date: '20-10-2023',
            time: '10:00 AM',
            place: 'India'
        },
        {
            img: image,
            name: "Celestial",
            link: '/eventdetails',
            descrip: "ji hieffie ie ifheiuh en e ehf en iufe efih e iuh   ie  eiuhfe  efneifeilfe ieil",
            pay: 0,
            date: '20-10-2023',
            time: '10:00 AM',
            place: 'India'
        },
        {
            img: image,
            name: "Hackathon",
            link: '/eventdetails',
            descrip: "ji hieffie ie ifheiuh en e ehf en iufe efih e iuh   ie  eiuhfe  efneifeilfe ieil",
            pay: 0,
            date: '20-10-2023',
            time: '10:00 AM',
            place: 'India'
        }
    ]
    let i = 1;
    return (
        <>
            <center className='mt-5  p-3 m-5 rounded'><h1>Work Shop & Technical Events</h1></center>
            {
                eventList.map((t) => {
                    return (
                        <a href={t.link} id="link">
                        <div id="wrapper" className='d-flex mx-5 my-1 rounded border p-3 border-primary'>
                            <div className='col-1 my-4 offset-1 rounded d-flex justify-content-center align-items-center'>
                                <h3>{i++}</h3>
                            </div>
                            <div className='col-2 my-4 mx-1  d-flex rounded justify-content-center align-items-center'>
                                <img src={t.img} width='200px' height='140px' ></img>
                            </div>
                            <div className='col-5 rounded d-flex border-left border-right border-info flex-column justify-content-center align-items-center'>
                                <div><h4>{t.name}</h4></div>
                                <p>{t.descrip}</p>
                                <div className=''>Rupees {t.pay} only</div>
                            </div>
                            <div className='col-3  my-4 mx-1 rounded '>
                                <div className='d-flex mt-3 ml-3'>
                                    <i class="bi bi-calendar"></i>
                                    <p className='ml-2'>{t.date}</p>
                                </div>
                                <div className='d-flex ml-3'>
                                    <i class="bi bi-clock"></i>
                                    <p className='ml-3'>{t.time}</p>
                                </div>
                                <div className='d-flex ml-3'>
                                    <i class="bi bi-geo-alt"></i>
                                    <p className='ml-2'>{t.place}</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    )
                })
            }
        </>
    )
}

export default Workshoppage
