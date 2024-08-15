দৈর্ঘ্য (Length) বনাম ইনডেক্স (Index): সংক্ষেপে বাংলায়
জাভাস্ক্রিপ্টে, ডাটার দৈর্ঘ্য (length) ১ থেকে গণনা করা হয়, কিন্তু ইনডেক্স (index) ০ থেকে শুরু হয়।

উদাহরণ:
let str = "Hello";
console.log(str.length); // আউটপুট: 5

এখানে, "Hello" স্ট্রিংটির দৈর্ঘ্য ৫, কারণ এতে ৫টি অক্ষর আছে।
console.log(str[0]); // আউটপুট: "H"
console.log(str[4]); // আউটপুট: "o"

সংক্ষেপে:
দৈর্ঘ্য (Length): ১ থেকে গণনা করা হয় (যেমন, ১, ২, ৩, ...).
ইনডেক্স (Index): ০ থেকে শুরু হয় (যেমন, ০, ১, ২, ...).
এটি একটি গুরুত্বপূর্ণ বৈশিষ্ট্য যা স্ট্রিং এবং অ্যারের সাথে কাজ করার সময় মনে রাখতে হয়।


## স্ট্রিং (String) এর প্রপার্টি এবং মেথড: সংক্ষেপে বাংলায়
স্ট্রিং (String) হলো জাভাস্ক্রিপ্টের একটি ডেটা টাইপ যা টেক্সট বা অক্ষরের একটি ক্রম সংরক্ষণ করে। 
স্ট্রিং-এর কিছু গুরুত্বপূর্ণ প্রপার্টি এবং মেথড রয়েছে যা প্রায়ই ব্যবহৃত হয়।

>>>প্রপার্টি (Properties):<<<

length:
স্ট্রিং-এর মোট অক্ষরের সংখ্যা প্রদান করে।
উদাহরণ:


let str = "Hello";
console.log(str.length); // আউটপুট: 5



>>>মেথড (Methods):<<<

>>charAt(index):
নির্দিষ্ট ইনডেক্সে থাকা অক্ষরটি প্রদান করে।
উদাহরণ:


let str = "Hello";
console.log(str.charAt(1)); // আউটপুট: "e"



>>charCodeAt()  
charCodeAt() মেথড কী?
charCodeAt() মেথডটি একটি স্ট্রিং-এর নির্দিষ্ট ইনডেক্সে থাকা অক্ষরের ইউনিকোড (Unicode) মান প্রদান করে। এটি স্ট্রিং-এর নির্দিষ্ট অবস্থানের অক্ষরের ASCII বা ইউনিকোড মান বের করার জন্য ব্যবহৃত হয়।

charCodeAt() মেথডের ব্যবহার:
এই মেথডটি একটি সংখ্যা রিটার্ন করে যা নির্দিষ্ট ইনডেক্সে থাকা অক্ষরের ইউনিকোড মান প্রকাশ করে।

সিনট্যাক্স:



string.charCodeAt(index)
index: স্ট্রিং-এর যে অবস্থানের অক্ষরের ইউনিকোড মান পেতে চান সেই ইনডেক্স।
উদাহরণসমূহ:
নির্দিষ্ট ইনডেক্সে থাকা অক্ষরের ইউনিকোড মান পাওয়া:



let str = "Hello";
let code = str.charCodeAt(0);
console.log(code); // আউটপুট: 72
এখানে, ইনডেক্স ০-এ থাকা অক্ষর হলো 'H', যার ইউনিকোড মান 72।

আরেকটি উদাহরণ:



let str = "World";
let code = str.charCodeAt(1);
console.log(code); // আউটপুট: 111
এখানে, ইনডেক্স ১-এ থাকা অক্ষর হলো 'o', যার ইউনিকোড মান 111।

কিছু গুরুত্বপূর্ণ বিষয়:
ইনডেক্স যদি স্ট্রিং-এর দৈর্ঘ্যের বাইরে হয়:



let str = "Hello";
let code = str.charCodeAt(10);
console.log(code); // আউটপুট: NaN
এখানে, ইনডেক্স ১০ স্ট্রিং-এর দৈর্ঘ্যের বাইরে থাকায় আউটপুট হবে NaN (Not a Number)।

স্ট্রিং-এর সমস্ত অক্ষরের ইউনিকোড মান পাওয়া:



let str = "ABC";
for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i));
}
// আউটপুট: 
// 65
// 66
// 67
এখানে, স্ট্রিং "ABC" এর প্রতিটি অক্ষরের ইউনিকোড মান পাওয়া হচ্ছে।

সংক্ষেপে:
charCodeAt() মেথড স্ট্রিং-এর নির্দিষ্ট ইনডেক্সে থাকা অক্ষরের ইউনিকোড মান প্রদান করে।
এটি ইনডেক্স গ্রহণ করে এবং একটি সংখ্যা রিটার্ন করে যা সেই ইনডেক্সের অক্ষরের ইউনিকোড মান।
ইনডেক্স যদি স্ট্রিং-এর দৈর্ঘ্যের বাইরে হয় তবে এটি NaN রিটার্ন করে।
এই মেথডটি স্ট্রিং-এর নির্দিষ্ট অক্ষরের ইউনিকোড বা ASCII মান বের করতে সহজ এবং কার্যকরী উপায়।

>>concat(string1, string2, ...):
একাধিক স্ট্রিং একত্রিত করে একটি নতুন স্ট্রিং তৈরি করে।
উদাহরণ:


let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // আউটপুট: "Hello World"


>>includes(searchString):
নির্দিষ্ট টেক্সট স্ট্রিং-এর মধ্যে রয়েছে কিনা তা পরীক্ষা করে এবং একটি বুলিয়ান (Boolean) মান প্রদান করে।
উদাহরণ:


let str = "Hello World";
console.log(str.includes("World")); // আউটপুট: true

>>indexOf(searchString):
নির্দিষ্ট টেক্সট স্ট্রিং-এর মধ্যে প্রথমবারের মতো কোথায় পাওয়া গেছে তার ইনডেক্স প্রদান করে।
উদাহরণ:


let str = "Hello World";
console.log(str.indexOf("World")); // আউটপুট: 6

>>slice(startIndex, endIndex):
স্ট্রিং-এর একটি অংশ কেটে একটি নতুন স্ট্রিং তৈরি করে।
উদাহরণ:


let str = "Hello World";
console.log(str.slice(0, 5)); // আউটপুট: "Hello"


>>সাবস্ট্রিং (substring) 
সাবস্ট্রিং কী?
সাবস্ট্রিং হলো স্ট্রিং-এর একটি অংশ যা নির্দিষ্ট শুরু এবং শেষ অবস্থান থেকে কেটে নেওয়া হয়। জাভাস্ক্রিপ্টে, সাবস্ট্রিং পেতে substring() মেথডটি ব্যবহার করা হয়।

substring() মেথডের ব্যবহার:
substring() মেথডটি স্ট্রিং-এর নির্দিষ্ট অংশ কেটে একটি নতুন স্ট্রিং রিটার্ন করে। এই মেথডটি দুটি আর্গুমেন্ট গ্রহণ করে: শুরু অবস্থান (start index) এবং শেষ অবস্থান (end index)। শুরু অবস্থানটি অবশ্যই উল্লেখ করতে হয়, তবে শেষ অবস্থানটি ঐচ্ছিক (optional)।

সিনট্যাক্স:



string.substring(startIndex, endIndex)
startIndex: স্ট্রিং-এর অংশ নেওয়ার শুরু ইনডেক্স (শূন্য ভিত্তিক সংখ্যা)।
endIndex: স্ট্রিং-এর অংশ নেওয়ার শেষ ইনডেক্স (শূন্য ভিত্তিক সংখ্যা), কিন্তু এই ইনডেক্সটি অন্তর্ভুক্ত হবে না। এটি ঐচ্ছিক।
উদাহরণসমূহ:
শুধু শুরু অবস্থান (start index) প্রদান করা:



let str = "Hello World";
let result = str.substring(6);
console.log(result); // আউটপুট: "World"
এখানে, সাবস্ট্রিং শুরু হয় ইনডেক্স ৬ থেকে এবং শেষ পর্যন্ত স্ট্রিং-এর শেষ পর্যন্ত যায়।

শুরু এবং শেষ অবস্থান (start index and end index) প্রদান করা:



let str = "Hello World";
let result = str.substring(0, 5);
console.log(result); // আউটপুট: "Hello"
এখানে, সাবস্ট্রিং শুরু হয় ইনডেক্স ০ থেকে এবং ইনডেক্স ৫-এ শেষ হয় (৫ অন্তর্ভুক্ত নয়)।

কিছু গুরুত্বপূর্ণ বিষয়:
যদি startIndex এবং endIndex সমান হয়:



let str = "Hello World";
let result = str.substring(3, 3);
console.log(result); // আউটপুট: ""
এখানে, আউটপুটটি একটি খালি স্ট্রিং হবে কারণ শুরু এবং শেষ ইনডেক্স একই।

যদি startIndex এবং endIndex এর মান উল্টানো হয়:



let str = "Hello World";
let result = str.substring(5, 0);
console.log(result); // আউটপুট: "Hello"
এখানে, সাবস্ট্রিং স্বয়ংক্রিয়ভাবে ছোট থেকে বড় ইনডেক্স হিসাবে গণনা করা হয়। তাই, ইনডেক্স ০ থেকে ৫ পর্যন্ত সাবস্ট্রিং দেওয়া হবে।

যদি ইনডেক্স স্ট্রিং-এর দৈর্ঘ্যের বাইরে হয়:



let str = "Hello";
let result = str.substring(0, 10);
console.log(result); // আউটপুট: "Hello"
এখানে, ইনডেক্স ১০ স্ট্রিং-এর দৈর্ঘ্যের বাইরে থাকায় স্ট্রিং-এর শেষ পর্যন্ত অংশ দেওয়া হবে।

সংক্ষেপে:
substring() মেথড স্ট্রিং-এর নির্দিষ্ট অংশ কেটে একটি নতুন স্ট্রিং প্রদান করে।
দুটি ইনডেক্স প্রদান করা হয়: শুরু ইনডেক্স এবং শেষ ইনডেক্স (ঐচ্ছিক)।
শেষ ইনডেক্স অন্তর্ভুক্ত হয় না।
ইনডেক্সগুলির মান উল্টানো থাকলে স্বয়ংক্রিয়ভাবে ছোট থেকে বড় ইনডেক্স হিসাবে গণনা করা হয়।
এই মেথডটি স্ট্রিং-এর নির্দিষ্ট অংশ পেতে সহজ এবং কার্যকরী উপায়।



>>toLowerCase():
সমস্ত অক্ষর ছোট হরফে রূপান্তর করে।
উদাহরণ:


let str = "Hello World";
console.log(str.toLowerCase()); // আউটপুট: "hello world"


>>toUpperCase():
সমস্ত অক্ষর বড় হরফে রূপান্তর করে।
উদাহরণ:


let str = "Hello World";
console.log(str.toUpperCase()); // আউটপুট: "HELLO WORLD"


>>trim():
স্ট্রিং-এর শুরু এবং শেষ থেকে ফাঁকা স্থান (whitespace) সরিয়ে দেয়।
উদাহরণ:


let str = "  Hello World  ";
console.log(str.trim()); // আউটপুট: "Hello World"


>>replace(searchValue, newValue):
স্ট্রিং-এর নির্দিষ্ট অংশকে অন্য একটি টেক্সট দিয়ে প্রতিস্থাপন করে।
উদাহরণ:


let str = "Hello World";
console.log(str.replace("World", "Everyone")); // আউটপুট: "Hello Everyone"


>>split(separator):
স্ট্রিংকে একটি নির্দিষ্ট সীমায় ভাগ করে একটি অ্যারের (array) মধ্যে রূপান্তর করে।
উদাহরণ:


let str = "Hello World";
console.log(str.split(" ")); // আউটপুট: ["Hello", "World"]
সংক্ষেপে:
স্ট্রিং-এর প্রপার্টি এবং মেথডগুলি টেক্সট ম্যানিপুলেশনের জন্য অত্যন্ত গুরুত্বপূর্ণ এবং এগুলি বিভিন্ন পরিস্থিতিতে ব্যবহৃত হয়। 
length প্রপার্টি স্ট্রিং-এর দৈর্ঘ্য প্রদান করে, এবং বিভিন্ন মেথডগুলি স্ট্রিং-এর অক্ষরগুলি পরীক্ষা, 
পরিবর্তন এবং ভাগ করতে ব্যবহৃত হয়



১৪>> জাভাস্ক্রিপ্টে সংখ্যা (Number) সম্পর্কিত মেথড এবং প্রপার্টি:

প্রপার্টি (Properties):

>>Number.EPSILON:
খুব ছোট ভগ্নাংশ সংখ্যা, দুই ভিন্ন সংখ্যা নির্ধারণে সহায়ক।
উদাহরণ:
console.log(Number.EPSILON); // আউটপুট: 2.220446049250313e-16


>>Number.MAX_SAFE_INTEGER:
জাভাস্ক্রিপ্টে সর্বোচ্চ নিরাপদ পূর্ণসংখ্যা।
উদাহরণ:
console.log(Number.MAX_SAFE_INTEGER); // আউটপুট: 9007199254740991


>>Number.MAX_VALUE:
জাভাস্ক্রিপ্টে সর্বোচ্চ সংখ্যা মান।
উদাহরণ:
console.log(Number.MAX_VALUE); // আউটপুট: 1.7976931348623157e+308


>>Number.MIN_SAFE_INTEGER:
জাভাস্ক্রিপ্টে সর্বনিম্ন নিরাপদ পূর্ণসংখ্যা।
উদাহরণ:
console.log(Number.MIN_SAFE_INTEGER); // আউটপুট: -9007199254740991


>>Number.MIN_VALUE:
জাভাস্ক্রিপ্টে সর্বনিম্ন সংখ্যা মান।
উদাহরণ:
console.log(Number.MIN_VALUE); // আউটপুট: 5e-324


>>Number.NaN:
"Not-a-Number" মান প্রকাশ করে।
উদাহরণ:
console.log(Number.NaN); // আউটপুট: NaN


Number.NEGATIVE_INFINITY:
ঋণাত্মক অসীম সংখ্যা প্রকাশ করে।
উদাহরণ:
console.log(Number.NEGATIVE_INFINITY); // আউটপুট: -Infinity



>>Number.POSITIVE_INFINITY:
ধনাত্মক অসীম সংখ্যা প্রকাশ করে।
উদাহরণ:
console.log(Number.POSITIVE_INFINITY); // আউটপুট: Infinity


*মেথড (Methods):
>>Number.isFinite(value):
চেক করে যে মানটি সসীম সংখ্যা কিনা।
উদাহরণ:
console.log(Number.isFinite(100)); // আউটপুট: true
console.log(Number.isFinite(Infinity)); // আউটপুট: false



>>Number.isInteger(value):
চেক করে যে মানটি পূর্ণসংখ্যা কিনা।
উদাহরণ:
console.log(Number.isInteger(100)); // আউটপুট: true
console.log(Number.isInteger(10.5)); // আউটপুট: false



>>Number.isNaN(value):
চেক করে যে মানটি NaN কিনা।
উদাহরণ:
console.log(Number.isNaN(NaN)); // আউটপুট: true
console.log(Number.isNaN(100)); // আউটপুট: false



>>Number.isSafeInteger(value):
চেক করে যে মানটি নিরাপদ পূর্ণসংখ্যা কিনা।
উদাহরণ:
console.log(Number.isSafeInteger(100)); // আউটপুট: true
console.log(Number.isSafeInteger(9007199254740992)); // আউটপুট: false



>>Number.parseFloat(value):
একটি স্ট্রিং মানকে ভাসমান বিন্দু সংখ্যায় রূপান্তর করে।
উদাহরণ:
console.log(Number.parseFloat("10.5")); // আউটপুট: 10.5



>>Number.parseInt(value, radix):
একটি স্ট্রিং মানকে পূর্ণসংখ্যায় রূপান্তর করে।
উদাহরণ:
console.log(Number.parseInt("10", 10)); // আউটপুট: 10
console.log(Number.parseInt("10", 2)); // আউটপুট: 2 (বাইনারি ভিত্তিতে)


*প্রোটোটাইপ মেথড (Prototype Methods):
>>toExponential(fractionDigits):
সংখ্যা কে এক্সপোনেনশিয়াল নোটেশনে রূপান্তরিত করে।
উদাহরণ:
let num = 123456;
console.log(num.toExponential(2)); // আউটপুট: "1.23e+5"



>>toFixed(digits):
নির্দিষ্ট দশমিক স্থান পর্যন্ত সংখ্যা কে রূপান্তরিত করে।
উদাহরণ:
let num = 10.12345;
console.log(num.toFixed(2)); // আউটপুট: "10.12"



>>toPrecision(precision):
নির্দিষ্ট সঠিকতা সহ সংখ্যা কে রূপান্তরিত করে।
উদাহরণ:
let num = 10.12345;
console.log(num.toPrecision(4)); // আউটপুট: "10.12"



>>toString(radix):
সংখ্যা কে স্ট্রিং এ রূপান্তরিত করে।
উদাহরণ:
let num = 255;
console.log(num.toString(2)); // আউটপুট: "11111111" (বাইনারি)
console.log(num.toString(16)); // আউটপুট: "ff" (হেক্সাডেসিমাল)



>>valueOf():
অবজেক্টের প্রিমিটিভ মান রিটার্ন করে।
উদাহরণ:
let num = new Number(10);
console.log(num.valueOf()); // আউটপুট: 10


## জাভাস্ক্রিপ্টে অ্যারের সকল প্রপার্টি এবং মেথড: বাংলায় ব্যাখ্যা
অ্যারে জাভাস্ক্রিপ্টে একটি শক্তিশালী ডাটা টাইপ যা বিভিন্ন প্রকার ডাটা সংরক্ষণ করতে পারে। এখানে অ্যারের সকল প্রপার্টি এবং মেথডগুলি বাংলায় ব্যাখ্যা করা হলো:

* প্রপার্টি (Properties):
length:
অ্যারের উপাদানগুলির সংখ্যা নির্দেশ করে।
উদাহরণ:


let arr = [1, 2, 3, 4];
console.log(arr.length); // আউটপুট: 4
* মেথড (Methods):

>>concat():
দুটি বা ততোধিক অ্যারে একত্রিত করে নতুন অ্যারে তৈরি করে।
উদাহরণ:
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // আউটপুট: [1, 2, 3, 4]


>>join():
অ্যারের সকল উপাদানকে একটি স্ট্রিং-এ রূপান্তর করে এবং একটি নির্দিষ্ট বিভাজক ব্যবহার করে তাদের যুক্ত করে।
উদাহরণ:


let arr = [1, 2, 3];
let str = arr.join('-');
console.log(str); // আউটপুট: "1-2-3"


>>push():
অ্যারের শেষে একটি বা ততোধিক উপাদান যোগ করে এবং নতুন দৈর্ঘ্য রিটার্ন করে।
উদাহরণ:


let arr = [1, 2];
arr.push(3);
console.log(arr); // আউটপুট: [1, 2, 3]


>>pop():
অ্যারের শেষ উপাদানটি সরিয়ে দেয় এবং সরানো উপাদানটি রিটার্ন করে।
উদাহরণ:
let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(lastElement); // আউটপুট: 3
console.log(arr); // আউটপুট: [1, 2]


>>shift():
অ্যারের প্রথম উপাদানটি সরিয়ে দেয় এবং সরানো উপাদানটি রিটার্ন করে।
উদাহরণ:


let arr = [1, 2, 3];
let firstElement = arr.shift();
console.log(firstElement); // আউটপুট: 1
console.log(arr); // আউটপুট: [2, 3]


>>unshift():
অ্যারের শুরুতে একটি বা ততোধিক উপাদান যোগ করে এবং নতুন দৈর্ঘ্য রিটার্ন করে।
উদাহরণ:
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // আউটপুট: [1, 2, 3]


>>slice():
একটি নতুন অ্যারে তৈরি করে যা নির্দিষ্ট অংশের উপাদানগুলির সমন্বয়ে গঠিত।
উদাহরণ:
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);
console.log(newArr); // আউটপুট: [2, 3]


>>splice():
একটি অ্যারে থেকে উপাদানগুলি যোগ বা সরাতে ব্যবহৃত হয়।
উদাহরণ:
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // আউটপুট: [1, 4]
arr.splice(1, 0, 2, 3);
console.log(arr); // আউটপুট: [1, 2, 3, 4]


>>reverse():
একটি অ্যারের উপাদানগুলিকে বিপরীত ক্রমে সাজায়।
উদাহরণ:
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // আউটপুট: [3, 2, 1]


>>sort():
অ্যারের উপাদানগুলিকে নির্দিষ্ট ক্রমে সাজায়।
উদাহরণ:
let arr = [3, 1, 2];
arr.sort();
console.log(arr); // আউটপুট: [1, 2, 3]


>>indexOf():
অ্যারের মধ্যে নির্দিষ্ট উপাদানের প্রথম ইনডেক্স রিটার্ন করে।
উদাহরণ:
let arr = [1, 2, 3];
console.log(arr.indexOf(2)); // আউটপুট: 1


>>lastIndexOf():
অ্যারের মধ্যে নির্দিষ্ট উপাদানের সর্বশেষ ইনডেক্স রিটার্ন করে।
উদাহরণ:
let arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); // আউটপুট: 3


>>forEach():
অ্যারের প্রতিটি উপাদানের উপর একটি নির্দিষ্ট ফাংশন প্রয়োগ করে।
উদাহরণ:
let arr = [1, 2, 3];
arr.forEach(function(element) {
    console.log(element);
});
// আউটপুট: 1, 2, 3



>>map():
একটি নতুন অ্যারে তৈরি করে যা প্রতিটি উপাদানে নির্দিষ্ট ফাংশন প্রয়োগ করে।
উদাহরণ:
let arr = [1, 2, 3];
let newArr = arr.map(function(element) {
    return element * 2;
});
console.log(newArr); // আউটপুট: [2, 4, 6]


>>filter():
একটি নতুন অ্যারে তৈরি করে যা নির্দিষ্ট শর্ত পূরণকারী উপাদানগুলি ধারণ করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
let newArr = arr.filter(function(element) {
    return element > 2;
});
console.log(newArr); // আউটপুট: [3, 4]


>>reduce():
একটি অ্যারের উপাদানগুলিকে একটি একক মানে রূপান্তর করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
let sum = arr.reduce(function(total, element) {
    return total + element;
}, 0);
console.log(sum); // আউটপুট: 10


>>reduceRight():
reduce() মেথডের মতোই কাজ করে, তবে ডান দিক থেকে বাম দিকে কাজ করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
let sum = arr.reduceRight(function(total, element) {
    return total + element;
}, 0);
console.log(sum); // আউটপুট: 10


>>some():
অ্যারের কোন উপাদান যদি নির্দিষ্ট শর্ত পূরণ করে, তাহলে true রিটার্ন করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
let hasEven = arr.some(function(element) {
    return element % 2 === 0;
});
console.log(hasEven); // আউটপুট: true


>>every():
অ্যারের সকল উপাদান যদি নির্দিষ্ট শর্ত পূরণ করে, তাহলে true রিটার্ন করে।
উদাহরণ:


let arr = [1, 2, 3, 4];
let allEven = arr.every(function(element) {
    return element % 2 === 0;
});
console.log(allEven); // আউটপুট: false


>>find():
অ্যারের মধ্যে নির্দিষ্ট শর্ত পূরণকারী প্রথম উপাদান রিটার্ন করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
let found = arr.find(function(element) {
    return element > 2;
});
console.log(found); // আউটপুট: 3


>>findIndex():
অ্যারের মধ্যে নির্দিষ্ট শর্ত পূরণকারী প্রথম উপাদানের ইনডেক্স রিটার্ন করে।
উদাহরণ:


let arr = [1, 2, 3, 4];
let foundIndex = arr.findIndex(function(element) {
    return element > 2;
});
console.log(foundIndex); // আউটপুট: 2


>>includes():
অ্যারে নির্দিষ্ট উপাদান আছে কিনা তা পরীক্ষা করে।
উদাহরণ:
let arr = [1, 2, 3, 4];
console.log(arr.includes(2)); // আউটপুট: true
console.log(arr.includes(5)); // আউটপুট: false
সংক্ষেপে:
জাভাস্ক্রিপ্টের অ্যারে প্রপার্টি এবং মেথডগুলি বিভিন্ন ধরনের কাজ করতে ব্যবহৃত হয়, যেমন উপাদান যোগ করা, সরানো, অনুসন্ধান করা, এবং অন্যান্য নানা ধরনের কার্য সম্পাদন করা। এই মেথড এবং প্রপার্টিগুলি অ্যারের সাথে কাজ করতে আমাদের সহজ এবং কার্যকর উপায় প্রদান করে।