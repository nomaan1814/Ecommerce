const nodemailer = require("nodemailer");
const path = require("path");
const mustache = require("mustache");
const fs = require("fs");
const moment = require('moment');











let transport = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});



/**
 * @param {object} brand brand data
 */


function sendAddBrandEmail(addResult) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "add_brand.html"
  )

  const view = {
    siteName: "utility.com",
    supportMail: "admin@utility.com",
    currentYear: moment().year(),
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: addResult.email,
    subject: "Add Brand",
    html: htmlContent,
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}

/**
 * 
 * @param {object} Collectible collectible data 
 */
function sendApproveCollectibleMail(approveCollectible) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "approve_collectible.html"
  )

  const view = {
    siteName: "utility.com",
    supportMail: "admin@utility.com",
    collectibleId: approveCollectible.id,
    currentYear: moment().year(),
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Deactivate",
    html: htmlContent
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}

/**
 * @param {object} user user data
 */
function sendUserDeactivateMail(user) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "user_deactivate.html"
  )

  const view = {
    siteName: "utility.com",
    supportMail: "admin@utility.com",
    currentYear: moment().year(),
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Deactivate",
    html: htmlContent
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}


/**
 * @param {object} user ambassador data
 */

function sendAmbassadorDeactivateMail(user) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "ambassador_deactivate.html"
  )

  const view = {
    siteName: "utility.com",
    supportMail: "admin@utility.com",
    currentYear: moment().year(),
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Deactivate Ambassador",
    html: htmlContent
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}
/**
 * 
 * @param {object} user 
 */

function sendAddAmbassadoeMail(user) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "add_ambassador.html"
  )

  const view = {
    siteName: "utility.com",
    supportMail: "admin@utility.com",
    currentYear: moment().year(),
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Ambassador",
    html: htmlContent
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}


/**
 *
 * @param {token} token
 * @param {object} user users data
 */
function sendResetPasswordMail(otp, user) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "otp.html"
  )

  const view = {
    CODE: otp,
    utilityhelp: "utility.co.uk",
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Password Reset Email",
    html: htmlContent
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}


function sendPurchaseSuccessfulMail(user, collectibleDoc) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "successful_purchase.html"
  )

  const view = {
    username: user.fName,
    Item: collectibleDoc.name,
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Purchase Successful ",
    html: htmlContent
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}

function sendSignupMail(user) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "welcome.html"
  )

  const view = {
    username: user.username,
    storeURL: "",
    marketURL: "",
    utilityhelp: "utility.co.uk",
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Welcome ",
    html: htmlContent
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}


function sendPaymentReceiptMail(user, reqPaymentObj, collectibleDoc) {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    "receipt.html"
  )

  const view = {
    receiptNumber: reqPaymentObj.paymentObj.id,
    amount: reqPaymentObj.amount,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    method: reqPaymentObj.paymentGateway,
    utilityPayment: collectibleDoc.primaryCommission,
    chargedAmount: reqPaymentObj.amount,
    collectibleURL: "http://localhost:3002/collectibles"
  }

  const htmlContent = mustache.render(
    fs.readFileSync(templatePath, "utf8"),
    view
  );

  const mailOptions = {
    from: "admin@utility.art",
    to: user.email,
    subject: "Payment Recipt ",
    html: htmlContent
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
}


module.exports = {
  transport,
  sendSignupMail,
  sendAddBrandEmail,
  sendApproveCollectibleMail,
  sendUserDeactivateMail,
  sendAddAmbassadoeMail,
  sendAmbassadorDeactivateMail,
  sendResetPasswordMail,
  sendPurchaseSuccessfulMail,
  sendPaymentReceiptMail

};
