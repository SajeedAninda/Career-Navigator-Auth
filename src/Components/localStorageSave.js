let getStoredApplication = () => {
    let storedJobData = localStorage.getItem("job-data");
    if (storedJobData) {
        return JSON.parse(storedJobData);
    } else {
        return [];
    }
}

let saveJobApplication = (id) => {
    let storedJobData = getStoredApplication();
    let exists = storedJobData.find(jobId => jobId === id);
    if (!exists) {
        storedJobData.push(id);
        localStorage.setItem("job-data", JSON.stringify(storedJobData));
    }
}

export { getStoredApplication, saveJobApplication };
