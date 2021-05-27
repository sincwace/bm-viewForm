<template>
    <div style="padding: 20px;">
        <view-form :collapseClassName="viewForm.collapseClassName"
				   :activeNames="viewForm.activeNames"
				   :data="viewForm.data"
				   :labelWidth="viewForm.labelWidth"></view-form>
    </div>
</template>

<script>
import viewForm from './viewForm'

export default {
    components: { viewForm },
    data() {
        return {
            viewForm: {
				labelWidth: '140',
				collapseClassName: 'resetCollapse',
				activeNames: ['1'],
				data: [
					{
						title: '#1 小额零星项目信息',
						name: '1',
						list: [
							{
								name: '小额零星项目名称',
								content: '',
								keyName: 'sname',
								span: 12
							},
							{
								name: '小额零星项目编号',
								content: '',
								keyName: 'handwrittenNumber',
								span: 12
							},
							{
								name: '系统编号',
								content: '',
								keyName: 'icode',
								span: 12
							},
							{
								name: '所属工程/采购项目',
								content: '',
								keyName: 'aidName',
								span: 12
							},
							{
								name: '采购人名称',
								content: '',
								keyName: 'purchaserName',
								span: 12
							},
							{
								name: '采购项目负责人',
								content: '',
								keyName: 'purchaserProjectLeaderName',
								span: 12
							},
							{
								name: '代理机构名称',
								content: '',
								keyName: 'tenantName',
								span: 12
							},
							{
								name: '代理机构项目负责人',
								content: '',
								keyName: 'projectLeaderName',
								span: 12
							},
							{
								name: '预算金额',
								content: '',
								unit: '元',
								keyName: 'budget',
								span: 12
							},
							{
								name: '招标组织形式',
								content: '',
								keyName: 'bidForm',
								span: 12
							},
							{
								name: '资金占比说明',
								content: '',
								keyName: 'fundPropDescription',
								span: 12
							},
							{
								name: '备注',
								content: '',
								keyName: 'remake',
								span: 12
							}
						]
					}
				]
			}
        }
    }
}
</script>

