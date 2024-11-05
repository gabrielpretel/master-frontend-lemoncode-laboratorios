import React, { useEffect, useState } from "react";
import { Detail } from "./detail.component";
import { getMemberDetail } from "./api/api";
import { mapDetailToVM } from "./detail.mappers";
import { MemberDetail } from "./detail.vm";
import { useParams } from "react-router-dom";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = useState<MemberDetail>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getMemberDetail(id).then(mapDetailToVM).then(setMember);
    }
  }, [id]);

  return <>{member && <Detail member={member} />}</>;
};
