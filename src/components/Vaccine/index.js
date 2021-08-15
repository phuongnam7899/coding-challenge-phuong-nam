import { useEffect, useState } from 'react';
import './styles.css';
import dayjs from 'dayjs';
import {
    useLocation,
    useRouteMatch,
  } from "react-router-dom";

const initVaccinePost = {
    astrazeneca: [
        {
            owner: 'Nguyen Van A',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van B',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van C',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ],
    verocell: [
        {
            owner: 'Nguyen Van D',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van E',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van F',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ],
    sputnikv: [
        {
            owner: 'Nguyen Van G',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van H',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van I',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ],
    comirnaty: [
        {
            owner: 'Nguyen Van J',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van K',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van L',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ],
    moderna: [
        {
            owner: 'Nguyen Van M',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van N',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van O',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ],
    janssen: [
        {
            owner: 'Nguyen Van P',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van Q',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        },
        {
            owner: 'Nguyen Van R',
            time: dayjs(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt orci ut urna dignissim, vel eleifend nisi vehicula. Ut sagittis massa metus, quis euismod neque iaculis a. Vestibulum quis rutrum lectus, at tristique erat. Aliquam erat volutpat. Curabitur sapien turpis, tincidunt et ligula non, porttitor suscipit nisi. Phasellus ligula massa, fringilla quis congue eu, fermentum sit amet sem. Duis augue mauris, tristique varius eros sed, eleifend sagittis leo.'
        }
    ]
}

export const Vaccine = (props) => {
    const getInitPosts = () => {
        const href = window.location.href
        const hrefParts = href.split('/');
        const vaccineName = hrefParts[hrefParts.length - 1];
        return initVaccinePost[vaccineName];
    }
    const [showCreatePostForm, setShowCreatePostForm] = useState(false)
    const [newPostContent, setNewPostContent] = useState('');
    const [postsList, setPostList] = useState(getInitPosts());
    const location = useLocation();

    useEffect(() => {
        console.log('location', location);
        setPostList(getInitPosts());
    }, [location.pathname])

    const createPost = () => {
        setPostList([{
            owner: 'Anonymous',
            time: dayjs(),
            content: newPostContent,}
        ,...postsList]);
            setNewPostContent('')
    }

    return <div className='vaccine'>
        <div className='make-post'>
            {
                showCreatePostForm ? (<div className='create-post-form'>
                    <textarea
                        name="textValue"
                        className='post-editor'
                        value={newPostContent}
                        rows={10}
                        res
                        onChange={(e) => {
                            setNewPostContent(e.target.value)
                        }}
                    />
                    <div className='buttons'>
                        <button className='post-btn' onClick={createPost}>Đăng bài</button>
                        <button onClick={() => {setShowCreatePostForm(false)}}>Hủy</button>
                    </div>
                </div>) :
                    (<button className='make-post-btn' onClick={() => {
                        setShowCreatePostForm(true)
                    }}>Chia sẻ tình hình sau tiêm của bạn</button>)
            }

        </div>
        <div className='posts-list'>
            {
                postsList.map((item) => {
                    return <div className='one-post'>
                        <div className='post-header'>
                            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' className='avatar' />
                            <div className='name-and-time'>
                                <div className='name'>{item.owner}</div>
                                <div className='time'>{item.time.format('DD/MM/YYYY')}</div>
                            </div>
                        </div>
                        <div className='post-content'>
                            {item.content}
                        </div>
                        <div>
                        <span style={{marginRight: '0.75rem'}}><i class="fas fa-heart"></i> 100</span>
                        <span><i class="fas fa-comment"></i> 100</span>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
}