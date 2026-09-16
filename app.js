function marksToGP(m){
      if (m >= 90) return 10;
      if (m >= 80) return 9;
      if (m >= 75) return 8;
      if (m >= 70) return 7;
      if (m >= 60) return 6;
      if (m >= 50) return 5;
      if (m >= 40) return 4;
      return 0;
    }

    function calculate(){
      let totalCredits = 0;
      let totalPoints = 0;

      for(let i=1;i<=5;i++){
        let c = Number(document.getElementById('credit'+i).value);
        let g = document.getElementById('gp'+i).value;
        let m = document.getElementById('marks'+i).value;

        if(i===5 && (isNaN(c) || c===0 || document.getElementById('credit5').value==="")) continue;

        if(isNaN(c) || c<=0){ alert('Enter valid credit for subject '+i); return; }

        let gp = g !== "" ? Number(g) : (m !== "" ? marksToGP(Number(m)) : null);

        if(gp === null){ alert('Enter marks or GP for subject '+i); return; }

        totalCredits += c;
        totalPoints += c * gp;
      }

      let cgpa = totalPoints / totalCredits;
      let percent = cgpa * 9.5;

      document.getElementById('cgpaDisplay').textContent = cgpa.toFixed(2);
      document.getElementById('percentDisplay').textContent = percent.toFixed(2) + '%';
    }

    document.getElementById('calcBtn').addEventListener('click', calculate);
    document.getElementById('resetBtn').addEventListener('click', ()=>{
      document.getElementById('cgpaDisplay').textContent = '—';
      document.getElementById('percentDisplay').textContent = '—';
    });
