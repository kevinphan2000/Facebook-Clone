import React from 'react'; 
import Story from './Story';
import "./StoryReel.css";


const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image={img}
                profileSrc="https://static.toiimg.com/photo/76729750.cms"
                title="Pham Minh Duc"
            />

            <Story
                image={img}
                profileSrc="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                title="Phan Dac Khai"
            />

            <Story
                image={img}
                profileSrc="https://api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg"
                title="Minh Phan"
            />

            <Story
                image={img}
                profileSrc="https://d.newsweek.com/en/full/1592734/facebook-avatar.jpg?w=1600&h=1600&q=88&f=f188f5e40bbb7411e5435a4659bcba86"
                title="Bien Xanh"
            />

            <Story
                image={img}
                profileSrc="https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1"
                title="Frankie"
            />

        </div>
    )
}

export default StoryReel
