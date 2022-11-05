import profile_img from '../images/profile_img.jpg'
import slack from '../images/slack.png'
import github from '../images/git.png'
import logo from '../images/logo.png'
import I4G from '../images/I4G.png'

const Root = () => {
    const links = [{
        name: 'Twitter Link',
        linkDir: 'https://twitter.com/Cyril_Ikechukw',
        id: 'twitter'
    },
    {
        name: 'Zuri Team',
        linkDir: 'https://training.zuri.team/',
        id: 'btn__zuri'
    },
    {
        name: 'Zuri Books',
        linkDir: 'http://books.zuri.team/',
        id: 'books',
        text: 'Find books of any kind for your transition into tech'
    },
    {
        name: 'Python Books',
        linkDir: 'https://books.zuri.team/python-for-beginners?ref_id=<cyrilikechukwuidu>',
        id: 'book__python',
        text: 'Get python books for your consumption'
    },
    {
        name: 'Background Check for Coders',
        linkDir: 'https://background.zuri.team/',
        id: 'pitch'
    },
    {
        name: 'Design Books',
        linkDir: 'https://books.zuri.team/design-rules',
        id: 'book__design',
        text: 'Want books about designs and how to make a proper design? Click the link'
    }]


    return (
        <>
            <header>
                <div id='head'></div>
            </header>
            <main>
                <img src={profile_img} id='profile__img' />
                <h3 id='twitter'>Cyril</h3>
                <h3 id='slack'>Slack username</h3>
                <div id="cont">
                    {
                        links.map((e) => (
                            <a href={e.linkDir}>
                                <button id={e.id} className='ele'>
                                    <h2>{e.name}</h2>
                                    {e.text}
                                </button>
                            </a>
                        ))
                    }
                    <a href={`contacts`}>
                        <button className='ele'><h2>Contact me</h2></button>
                    </a>
                </div>
                <div id='media'>
                    <img src={slack} alt="" />
                    <a href="https://github.com/Dev-cyril"><img src={github} /></a>
                </div>
            </main>
            <footer>
                <img src={logo} alt="" id='zuri' />
                <h5>HNG Internship 9 Frontend Task</h5>
                <img src={I4G} alt="" id='i4g' />
            </footer>
        </>
    )
}

export default Root