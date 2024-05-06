export const dummyResponse = (req, res)=>{
    res.send('App is running ...');
}

export const generateImage = async(req, res)=>{
    const body = req.body;
    const searchText = body.searchText;
    
    const imgRes = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTQ5MzcwMDgsImV4cCI6MTcxNTAyMzQwOH0.kkBb4kq6Jg1ghhOWtmd4VjLzm0N8jzXnluTr4IaaFIQ",
            "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundary1ZA4qpiyYc26RupV",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://hotpot.ai/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n77\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nConcept Art 3\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-LC1qzp9LPcTQPIY\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-LC1qzp9LPcTQPIY.png\r\n------WebKitFormBoundary1ZA4qpiyYc26RupV--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    const image = await imgRes.json();

    res.json({
        status: 'success',
        image: image,
    });
}