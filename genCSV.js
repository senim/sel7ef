/* 
    post_id	post_title	post_author	post_content	post_category	default_category	
    post_tags	post_type	post_status	is_featured	post_date	post_address	post_city	
    post_region	post_country	post_zip	post_latitude	post_longitude	geodir_timing	
    geodir_contact	geodir_email	geodir_website	geodir_twitter	geodir_facebook	geodir_video	
    geodir_special_offers	geodir_mob	geodir_Inc	IMAGE	IMAGE	IMAGE	IMAGE	IMAGE
*/

console.log("post_id,post_title,post_author,post_content,post_category,post_type,post_address,post_region,post_city,post_country,post_latitude,post_longitude") 

for (var i=1; i<100; i++){
    var json = require('./result/'+i+'.json');
    json.forEach(function(item) { 
        var r =
        { 
            post_id: "",
            post_title: item.name,
            post_author: 2,
            post_content: item.address_comment,
            post_category: "Pharmacy",
            post_type: "gd_place",
            post_address: item.address_name,
            post_region: "Dubai",
            post_city: "Dubai",
            post_country: "United Arab Emirates",
            post_latitude: item.point.lat,
            post_longitude: item.point.lon
        }
        console.log(`${r.post_id},"${r.post_title}","${r.post_author}","${r.post_content}","${r.post_category}","${r.post_type}","${r.post_address}","${r.post_region}","${r.post_city}","${r.post_country}","${r.post_latitude}","${r.post_longitude}"`)   
    })
}



