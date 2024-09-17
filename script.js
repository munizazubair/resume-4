document.addEventListener("DOMContentLoaded", function () {
    var button1 = document.getElementById("b1");
    var button2 = document.getElementById("b2");
    var button3 = document.getElementById("b3");
    var button4 = document.getElementById("b4");
    var generateButton = document.getElementById("generate-btn");
    var isText1Visible = false;
    var isText2Visible = false;
    var isText3Visible = false;
    var isText4Visible = false;
    button1.addEventListener("click", function () {
        var text = document.getElementById("work1");
        if (isText1Visible) {
            text.innerHTML = "";
        }
        else {
            text.innerHTML =
                '<h5>Objective</h5><input type="text" id="fill-obj" name="objective content" placeholder="Your Objective">';
        }
        isText1Visible = !isText1Visible;
    });
    button2.addEventListener("click", function () {
        var text2 = document.getElementById("work2");
        if (isText2Visible) {
            text2.innerHTML = "";
        }
        else {
            text2.innerHTML =
                '<h5>Name</h5> <input id="fill-name" type="text" name="name content" placeholder="Your Name"> <h5>Nationality</h5> <input id="fill-nat" type="text" name="nationality content" placeholder="Your Nationality"> <h5>Gmail</h5> <input id="fill-gmail" type="text" name="gmail content" placeholder="Your Gmail" > <h5>Conatact No</h5> <input id="fill-contact" type="text" name="contact no" placeholder="Your Contact Number" > <h5>Linkedin Profile</h5> <input id="fill-linkedin" type="url" name="linkedin url" placeholder="Paste Your LinkedIn URL">   ';
        }
        isText2Visible = !isText2Visible;
    });
    button3.addEventListener("click", function () {
        var text3 = document.getElementById("work3");
        if (isText3Visible) {
            text3.innerHTML = "";
        }
        else {
            text3.innerHTML =
                '<h5>Education</h5> <input id="fill-education" type="text" name="education content" placeholder="Your Education"> ';
        }
        isText3Visible = !isText3Visible;
    });
    button4.addEventListener("click", function () {
        var text4 = document.getElementById("work4");
        if (isText4Visible) {
            text4.innerHTML = "";
        }
        else {
            text4.innerHTML =
                '<h5>Skills</h5> <input id="fill-skills" type="text" name="skills content" placeholder="Your Skills" ></div> ';
        }
        isText4Visible = !isText4Visible;
    });
    generateButton.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var resumeDiv = document.getElementById("resume-output");
        var obj = ((_a = document.getElementById("fill-obj")) === null || _a === void 0 ? void 0 : _a.value) || '';
        var name = ((_b = document.getElementById("fill-name")) === null || _b === void 0 ? void 0 : _b.value) || '';
        var nationality = ((_c = document.getElementById("fill-nat")) === null || _c === void 0 ? void 0 : _c.value) || '';
        var gmail = ((_d = document.getElementById("fill-gmail")) === null || _d === void 0 ? void 0 : _d.value) || '';
        var contact = ((_e = document.getElementById("fill-contact")) === null || _e === void 0 ? void 0 : _e.value) || '';
        var linkedin = ((_f = document.getElementById("fill-linkedin")) === null || _f === void 0 ? void 0 : _f.value) || '';
        var education = ((_g = document.getElementById("fill-education")) === null || _g === void 0 ? void 0 : _g.value) || '';
        var skills = ((_h = document.getElementById("fill-skills")) === null || _h === void 0 ? void 0 : _h.value) || '';
        if (!obj || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills) {
            alert("Please fill in all fields before generating the resume.");
            return;
        }
        resumeDiv.innerHTML = "\n      <h2>Editable Resume</h2>\n      \n      <h3>Objective</h3><p contenteditable =\"true\">".concat(obj, "</p>\n    \n      <h3>Personal Information</h3>\n      \n      <p>Name: <span contenteditable =\"true\"> ").concat(name, "</span></p>\n      <p>Nationality: <span contenteditable =\"true\">").concat(nationality, "</span></p>\n      <p>Gmail:<span contenteditable =\"true\"> ").concat(gmail, "</span></p>\n      <p>Contact No: <span contenteditable =\"true\">").concat(contact, "</span></p>\n      <p>LinkedIn Profile: <span contenteditable =\"true\"> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></span></p>\n    \n      <h3>Education</h3><p contenteditable =\"true\">").concat(education, "</p>\n\n      <h3>Skills</h3><p contenteditable =\"true\">").concat(skills, "</p>\n\n    ");
    });
});
