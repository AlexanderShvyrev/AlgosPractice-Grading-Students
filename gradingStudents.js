// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

// gradingStudents has the following parameter(s):

// grades: an array of integers representing grades before rounding

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if ((grades[i] + 1) % 5 == 0) {
                grades[i] += 1
            }
            else if ((grades[i] + 2) % 5 == 0) {
                grades[i] += 2
            }
        }
        console.log(grades[i])
    }
    return (grades)

}