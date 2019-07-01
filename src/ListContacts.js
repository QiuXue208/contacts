import React,{Component} from 'react'

//当组件只需要render方法时，更适合用无状态函数式组件
function ListContacts(props){
    return(
        <ol className="contact-list">
            {
                props.contacts.map((element) =>
                    <li key={element.id} className="contact-list-item">
                        <div className="contact-avatar" style={{
                            backgroundImage:`url(${element.avatarURL})`
                        }}></div>
                        <div className="contact-details">
                            <p>{element.name}</p>
                            <p>{element.email}</p>
                        </div>
                        <button className="contact-remove">Remove</button>
                    </li>
                )
            }
        </ol>
    )

}
export default ListContacts