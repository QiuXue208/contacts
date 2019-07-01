import React from 'react'
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

//当组件只需要render方法时，更适合用无状态函数式组件
class ListContacts extends React.Component{
    state={
        query:''
    }
    handleChange = (e)=>{
        this.setState({
            query:e.target.value
        })
    }
    clearQuery = ()=>{
        this.setState({
            query:''
        })
    }
    render(){
        const {query} = this.state
        const {onDeleteContact,contacts} = this.props
        let showContacts
        if(query){
           const match = new RegExp(escapeRegExp(query),'i') 
           showContacts = contacts.filter((contact)=>match.test(contact.name))
        }else{
            showContacts = contacts
        }
        showContacts.sort(sortBy('name'))
        return(
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input  type="text"
                            className="search-contacts"
                            value={query}
                            placeholder="Search contacts"
                            onChange={this.handleChange}
                    ></input>
                </div>
                {showContacts.length!==contacts.length&&(
                    <div className="showing-contacts">
                        <span>Now showing {showContacts.length} of {contacts.length} total.</span>
                        <button onClick={()=>this.clearQuery()}>show all</button>
                    </div>
                )}
                <ol className="contact-list">
                    {
                        showContacts.map((element) =>
                            <li key={element.id} className="contact-list-item">
                                <div className="contact-avatar" style={{
                                    backgroundImage:`url(${element.avatarURL})`
                                }}>
                                </div>
                                <div className="contact-details">
                                    <p>{element.name}</p>
                                    <p>{element.email}</p>
                                </div>
                                <button className="contact-remove" onClick={()=>onDeleteContact(element)}>Remove</button>
                            </li>
                        )
                    }
                </ol>
            </div>
            
        )
    }
    

}
export default ListContacts