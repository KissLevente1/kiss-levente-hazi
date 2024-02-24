document.addEventListener('DOMContentLoaded', function () {
    // Code for fetching data from the API and local storage
    // ...

    // Sample data for demonstration
    const teamMembersData = [
        { firstName: 'John', lastName: 'Doe', speed: '05:30', totalDistance: 0 },
        // Add more team members...
    ];

    const stagesData = [
        { distance: 7, startingLocation: 'Balatonfüred', arrivalLocation: 'Aszófő', name: 'Stage 1' },
        // Add more stages...
    ];

    // Function to render team member table
    renderTeamMemberTable(teamMembersData);

    // Function to render stage assignment table
    renderStageAssignmentTable(stagesData, teamMembersData);
});

function renderTeamMemberTable(data) {
    const teamMemberContainer = document.getElementById('team-member-container');
    teamMemberContainer.innerHTML = `
        <table>
            <tr>
                <th>Line Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Speed (MM:SS)</th>
                <th>Total Distance</th>
            </tr>
            ${data.map((member, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td contenteditable>${member.firstName}</td>
                    <td contenteditable>${member.lastName}</td>
                    <td contenteditable>${member.speed}</td>
                    <td>${member.totalDistance.toFixed(1)}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

function renderStageAssignmentTable(stages, teamMembers) {
    const stageAssignmentContainer = document.getElementById('stage-assignment-container');
    stageAssignmentContainer.innerHTML = `
        <table>
            <tr>
                <th>Line Number</th>
                <th>Distance (km)</th>
                <th>Starting Point</th>
                <th>Arriving Point</th>
                <th>Name</th>
                <th>Runner</th>
                <th>Time (MM:SS)</th>
            </tr>
            ${stages.map((stage, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${stage.distance}</td>
                    <td>${stage.startingLocation}</td>
                    <td>${stage.arrivalLocation}</td>
                    <td>${stage.name}</td>
                    <td>
                        <select onchange="updateTime(this.value, ${stage.distance}, ${index})">
                            <option>No runner selected</option>
                            ${teamMembers.map(member => `<option>${member.firstName} ${member.lastName}</option>`).join('')}
                        </select>
                    </td>
                    <td id="time-${index}"></td>
                </tr>
            `).join('')}
        </table>
    `;
}

function updateTime(selectedRunner, distance, index) {
    // Code to calculate time based on selected runner's speed
    // ...

    // Update time in the table
    document.getElementById(`time-${index}`).textContent = 'Calculated Time'; // Replace with actual calculated time
}