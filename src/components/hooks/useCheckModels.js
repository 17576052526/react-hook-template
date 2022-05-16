/*
 �����б��ѡ�����
 �÷���
 1.let [checks, setChecks] = useCheckModels();
 2. onChange={(e) => e.target.checked ? setChecks(data) : setChecks([])}
 3. checked={checks.find(s => s == m)} onChange={() => setChecks(m)}

 ˵����
 checks �Ǹ��������������ǰ�Ѿ�ѡ�еĶ���
 set(����) ����ѡ�е�����Щ������� set([]) ����ȫ��ѡ
 set(��ǰ����) ��ǰû��ѡ�У�������ѡ�У��Ѿ�ѡ�У���ȡ��ѡ��
 set(��ǰ����, '+') ��ʾ�����õ�ǰ��ѡ�У�����Ѿ�ѡ���˲����ظ����
 set(��ǰ����, '-') ��ʾ�����õ�ǰ��ȡ��ѡ��
 */
import React, { useState } from 'react';

export default function () {
    let [checks, setChecks] = useState([]);

    function set(param, type) {
        if (Array.isArray(param)) {
            checks = param;
        } else {
            let index = checks.indexOf(param);
            if (type == null) {
                if (index == -1) {
                    checks.push(param);
                } else {
                    checks.splice(index, 1);
                }
            } else {
                if (type == '+') {
                    index == -1 && checks.push(param);
                } else if (type == '-') {
                    index != -1 && checks.splice(index, 1);
                }
            }
        }
        setChecks([...checks]);
    }

    return [checks, set];
}
