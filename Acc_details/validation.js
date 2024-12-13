$("#accountForm").validate({
    rules:{
        name:{required:true,minlength:3,maxlength:50},
        email:{required:true,email:true},
        phone:{required:true,minlength:10,maxlength:14,digits:true},
        age:{required:true,number:true,min:18,max:120},
        gender:{required:true,minlength:4,maxlength:15},
        address:{maxlength:50}
},
    messages:{
        name:{required:"Name is required",minlength:"Atleast 5 characters",maxlength:"Maximum 50 Characters"},
        email:{required:"Email is required",email:"Your email address must be in the format of name@domain.com"},
        phone:{required:"Phone number required",minlength:"Atleast 10 Numbers",maxlength:"Maximum 14 Numbers"},
        age:{required:"Age is required",min:"Age must be between 18 and 120",max: "Age must be between 18 and 120"},
        gender:{required:"Gender is required",minlength:"Atleast 4 characters",maxlength:"Maximum 15 Characters"},
        address:{maxlength:"Maximum 50 Characters"}

    }
});



