import React from 'react';
import {LayoutHeader} from '../../components';
import ConditionAtBirth from './components/ConditionAtBirth';
import Disabilities from './components/Disabilities';
import FactorsAffectingHealth from './components/FactorsAffectingHealth';
import FamilyPrehistory from './components/FamilyPrehistory';
import HistoryOfMalformationsAllergies from './components/HistoryOfMalformationsAllergies';
import OtherProblems from './components/OtherProblems';
import ReproductiveHealth from './components/ReproductiveHealth';
import SurgeryHistory from './components/SurgeryHistory';

function HealthHistory() {
  return (
    <div className='healthHistory'>
      <LayoutHeader title='Thông tin tiền sử và các yếu tố liên quan sức khỏe' />
      <ConditionAtBirth />
      <FactorsAffectingHealth />
      <HistoryOfMalformationsAllergies />
      <Disabilities />
      <SurgeryHistory />
      <FamilyPrehistory />
      <ReproductiveHealth />
      <OtherProblems />
    </div>
  );
}

export default HealthHistory;
