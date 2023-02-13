const getSleepHours = (day) =>
{
  switch (day.toLowerCase()) {
    case 'monday':
    return 8;
      case 'tuesday':
      return 5;
    case 'wednesday':
    return 6;
      case 'thursday':
      return 7;
    case 'friday':
    return 6;
      case 'saturday':
      return 5;
    case 'sunday':
    return 8;
  }
}

const getActualSleepHours = () => (getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday'))

const getIdealSleepHours = (idealHours) => {
  // let idealHours = idealHours;
  return idealHours * 7;
}

/* Calculating the sleep debt. */
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(5);
    if (actualSleepHours === idealSleepHours)
    {
      console.log('You got the perfect amount of sleep.');
    }
        if (actualSleepHours > idealSleepHours)
    {
      let overtime = actualSleepHours - idealSleepHours;
      console.log(`You got more than the sleep needed.You went over by ${overtime} hours.`);
    }
        if (actualSleepHours < idealSleepHours)
    {
      let undertime = idealSleepHours - actualSleepHours;
      console.log(`You got less than the sleep needed. You need ${undertime} hours more.`);
    }
}

calculateSleepDebt();
