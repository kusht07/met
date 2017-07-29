import { Template } from 'meteor/templating';
import{ Notes} from '../Lib/collections.js';
import { Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
	passwordSignupFields:'USERNAME_ONLY'
});


import './main.html';

Template.body.helpers({
// notes:[
// {text:'My Note 1'},
// {text:'My Note 2'},
// {text:'My Note 3'}
// ]

notes(){
	return Notes.find({});
}

});


Template.add.events({
	'submit .add-form':function(){
		event.preventDefault();
		
		const target = event.target;
		const text = target.text.value;

	Meteor.call('notes.insert',text)

		target.text.value='';
 $('#addModal').modal('close');

	}
});

Template.note.events({
'click .delete-note':function(){
	// Notes.remove(this._id);

	Meteor.call('notes.remove',this);
	return false
}
});