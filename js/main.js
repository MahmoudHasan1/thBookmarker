var siteName = document.getElementById('siteName');
var siteNameRegex = /[a-zA-Z0-9]{3}/;

var siteUrl = document.getElementById('siteUrl');
var siteUrlRegex = /^[a-zA-Z0-9]{1,}[.][a-zA-Z0-9]{2,}$/;

var sbmt = document.getElementById('sbmt');

var alert = document.getElementById('alert');

var container = document.getElementById('row');

console.log(container);




siteName.addEventListener('input', validateSiteName);

function validateSiteName(){
    if (siteNameRegex.test(siteName.value)) {
        siteName.classList.remove('is-invalid');
        siteName.classList.add('is-valid');


        container+=
        `<tr> 
        <td>0 </td>
        <td>google </td>
        <td>link </td>
        <td>delete icon </td>
        
        
        
        
        </tr>`

    } else {
        siteName.classList.remove('is-valid');
        siteName.classList.add('is-invalid');
    }


    
}



siteUrl.addEventListener('input', validateSiteUrl);

function validateSiteUrl(){
    if (siteUrlRegex.test(siteUrl.value)) {
        siteUrl.classList.remove('is-invalid');
        siteUrl.classList.add('is-valid');
    } else {
        siteUrl.classList.remove('is-valid');
        siteUrl.classList.add('is-invalid');
    }
}


sbmt.addEventListener('click' , displayData);

function displayData() {
    if (siteName.classList.contains('is-valid') && siteUrl.classList.contains('is-valid')) {
        alert.classList.remove('d-block')
        alert.classList.add('d-none')
    } else if (siteName.classList.contains('is-invalid') || siteUrl.classList.contains('is-invalid')){
        alert.classList.remove('d-none')
        alert.classList.add('d-block')
    } 
    
}


