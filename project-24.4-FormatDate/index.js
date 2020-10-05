const formatDate = (time) => {
  if (!time) time = 0;
  Math.round(time);
  var h = (m = s = 0);
  var newTime = "";

  h = Math.floor(time / (60 * 60));
  time = time % (60 * 60);
  m = Math.floor(time / 60);
  time = time % 60;
  s = Math.floor(time);

  newTime = `${h !== 0 ? `${h}h` : ""}${h && m ? " " : ""}${
    m !== 0 ? `${m}m` : ""
  }${(h || m) && s ? " " : ""}${
    s !== 0 || (h === 0 && m === 0) ? `${s}s` : ""
  }`;

  return newTime;
};

module.exports = formatDate;
