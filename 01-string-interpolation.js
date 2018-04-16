/* Use string interpolation to replace hard coded values with variables
* string literals
* notice the variable html
 * */

 const postTitle = "Why We Write: The Value of Writing and the Editorial Process That Keeps Us Accountable";
 const postUrl = `https://seesparkbox.com/foundry/${postTitle.split(" ").join("_").toLowerCase()}`
 const postImage = "https://seesparkbox.com/foundry/uploads/article_uploads/austin_04-27-17.jpg";

 const html = `${postUrl} ${postTitle} ${postImage}`;

 console.log(html);
